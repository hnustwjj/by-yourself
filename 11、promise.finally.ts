;(Promise.prototype as any).finally = function (this: Promise<any>, cb: any) {
  // promise不论成功还是失败都会在当前promise状态改变之后调用cb
  // 并且finally链式调用返回的promise的状态是由cb的返回值决定的，所以用Promise.resolve()
  // 并且后面的promise会传入finally前的data或者err状态
  return this.then(
    value => Promise.resolve(cb()).then(() => value),
    err =>
      Promise.resolve(cb()).then(() => {
        throw err
      })
  )
}


function p2(): any {
  return new Promise((resolve, reject) => {
    resolve("a")
  })
}

// 由原本的例子可知，finally传入的回调是不会传入前面的promise的状态的
// 前面的prmoise的状态会传入finally返回的prmoise中
p2()
  .finally((data: any) => {
    console.log(data)
    return new Promise((resolve, reject) => reject())
  })
  .then(
    (data: any) => {
      console.log(data)
    },
    () => {
      console.log("err")
    }
  )
