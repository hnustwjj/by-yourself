function throttle(fn, times, immediately = true) {
  let pre = immediately ? 0 : Date.now()
  return function (...args) {
    const now = Date.now()
    if (Math.abs(now - pre) > times) {
      pre = now
      return fn(...args)
    }
  }
}

const throttlefn = throttle(() => console.log(1), 10)
throttlefn()
throttlefn()
throttlefn()
throttlefn()
throttlefn()
