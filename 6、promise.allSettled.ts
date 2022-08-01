// AllSettled返回的promise，必然是包含所有的情况
function myPromiseAllSettled(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    const results = [] as { state?: any; value?: any; reason?: any }[]
    promises.forEach(promise => {
      promise.then(
        value => {
          results.push({
            state: "resolved",
            value,
          })
          if (results.length === promises.length) {
            resolve(results)
          }
        },
        reason => {
          results.push({
            state: "rejected",
            reason,
          })
          if (results.length === promises.length) {
            resolve(results)
          }
        }
      )
    })
  })
}
