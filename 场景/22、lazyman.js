class lazyMan {
  promises = []
  constructor(name) {
    // 这里的奇妙之处在于，异步的去遍历promises
    // 并且通过template.then()来控制异步的执行顺序
    setTimeout(async () => {
      for(const p of this.promises){
        await p()
      }
    }, 0)
  }
  sleep(time) {
    // 这里不能把返回的promise放到一个单独的const中，因为他会立即执行
    this.promises.push(
      () =>
        new Promise(resolve => {
          console.log("sleep")
          setTimeout(() => {
            resolve()
            console.log("sleep end")
          }, time)
        })
    )
    return this
  }
  eat() {
    this.promises.push(
      () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve()
            console.log("eat end")
          })
        })
    )
    return this
  }
}

const man = new lazyMan()
man.sleep(1000).sleep(1000).eat().sleep(1000)
