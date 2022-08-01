// Race返回的promise状态是由最快的那个promise决定的
function myPrmoiseRace(promises: Promise<any>[]) {
  return new Promise((resolve, rejecte) => {
    promises.forEach(promise => {
      promise.then(resolve, rejecte)
    })
  })
}
