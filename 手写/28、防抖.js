function debounce(fn, times) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      return fn(...args)
    }, times)
  }
}

const debouncefn = debounce(() => console.log(1), 10000)
debouncefn()
debouncefn()
debouncefn()
debouncefn()
debouncefn()
