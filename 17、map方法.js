Array.prototype.map = function (cb) {
  const arr = this
  const res = []
  arr.forEach((item, index) => {
    res.push(cb(item, index))
  })
  return res
}

const arr = [1, 2, 3]
console.log(arr.map(i => i * 2))
