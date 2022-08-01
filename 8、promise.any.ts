// any则是至少等到一个promise状态变为成功，否则就返回全部的失败结果
function myPrmoiseAny(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    const results = [] as any[]
    promises.forEach(promise => {
      promise.then(resolve, err => {
        results.push(err)
        if (results.length === promises.length) reject(results)
      })
    })
  })
}
