function sum(a, b) {
  return a + b
}

function dou(num) {
  return num * 2
}

function sqr(num) {
  return num * num
}

const compose = comp(sum, dou, sqr)
console.log(compose(1, 2))

function comp(...fns) {
  return function (...args) {
    if (fns.length === 0) return null
    let pre = null
    fns.forEach(fn => {
      if (!pre) pre = fn(...args)
      else {
        pre = fn(pre)
      }
    })
    return pre
  }
}
