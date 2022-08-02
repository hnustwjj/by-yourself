const window = {}
Function.prototype.bind = function (thisArg, ...args) {
  //绑定默认参数
  const fn = this
  if (thisArg === null || thisArg === undefined) thisArg = window
  thisArg = Object(thisArg)

  thisArg.fn = fn
  // 返回一个可以继续接受参数的函数
  return function (...args2) {
    const res = thisArg.fn(...args, ...args2)
    delete thisArg.fn
    return res
  }
}

function run(time) {
  console.log(this, time, "running")
}

const me = {
  name: "jzsp",
}
run.bind(me, 111)()
