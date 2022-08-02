// all只返回所有的正确结果
function myPromiseAll(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    const results = [] as any[]
    promises.forEach(promise => {
      promise.then(res => {
        results.push(res)
        if (results.length === promises.length) {
          resolve(results)
        }
      }, reject)
    })
  })
}
const promises = [
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("第一个promise修改了状态")
      resolve(3)
    }, 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(4), 4000)),
]

const promises2 = [
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("第一个promise修改了状态")
      reject(3)
    }, 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(4), 4000)),
]

console.log("解析ts完成，开始执行")
myPromiseAll(promises2).then(res => {
  console.log(res)
})
export {}
