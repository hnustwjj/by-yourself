// 使用Promise.race来优化并发控制
async function asyncPool(limit: number, fetchDataFns: Array<() => Promise<any>>) {
  const executing = [] as Promise<any>[] //并发池
  const results = [] as Promise<any>[] // 保存状态
  for (const fetchDataFn of fetchDataFns) {
    const work = fetchDataFn()
    results.push(work) //将状态保存
    if (fetchDataFns.length > limit) {
      // 只有limit 小于 任务数才开始并发控制
      const e: any = work.then(() => executing.splice(executing.indexOf(e), 1)) //任务结束时移除并发池
      executing.push(e)
      if (executing.length === limit) {
        //当并发池满的时候，等待任务结束再进行下一步
        await Promise.race(executing)
      }
    }
  }
  return Promise.all(results)
}

const promises = [
  () =>
    new Promise(resolve => {
      console.log("1000ms后结束,第一个请求被加入")
      setTimeout(() => {
        resolve(1)
      }, 1000)
    }),
  () =>
    new Promise(resolve => {
      console.log("2000ms后结束,第二个请求被加入")
      setTimeout(() => {
        resolve(2)
      }, 2000)
    }),
  () =>
    new Promise(resolve => {
      console.log("1000ms后结束,第三个请求被加入")
      setTimeout(() => {
        resolve(3)
      }, 1000)
    }),
  () =>
    new Promise(resolve => {
      console.log("1000ms后结束,第四个请求被加入")
      setTimeout(() => {
        resolve(4)
      }, 1000)
    }),
]
asyncPool(2, promises).then(res => {
  console.log(res)
})
