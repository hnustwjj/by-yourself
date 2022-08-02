const SingleInstance = (function () {
  let instance = null //使用闭包保存实例
  return function (name, age) {
    if (!instance) {
      this.name = name
      this.age = age
      instance = this //保存当前实例
    } else {
      return instance // 返回实例
    }
  }
})()

const a = new SingleInstance("name", "age")
const b = new SingleInstance("name", "age")
console.log(a === b)
