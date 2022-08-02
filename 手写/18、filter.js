Array.prototype.filter = function (cb) {
  const results = []
  const arr = this
  arr.forEach((item, index) => {
    const res = cb(item, index)
    if (res) {
      results.push(item)
    }
  })
  return results
}

console.log([1, 2, 3].filter(i => i === 1))
