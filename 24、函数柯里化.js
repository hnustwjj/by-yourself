function myCurried(fn) {
  const len = fn.length
  return function curried(...args) {
    // 如果这个函数接受的参数比应当接受的参数少，就继续返回一个函数来接收参数
    if (args.length >= len) return fn(...args)
    return function (...args2) {
      // 这个返回的函数执行的时候，做的是curried相同的操作
      return curried(...[...args, ...args2])
    }
  }
}
function sum(a, b, c) {
  return a + b + c
}

const curriedSum = myCurried(sum)(1)(2)
console.log(curriedSum(3))
console.log(curriedSum(34))