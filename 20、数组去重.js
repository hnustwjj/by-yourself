function unique(arr) {
  return [...new Set(arr)]
}

function unique2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log(unique([1, 2, 3, 1, 2, 3]))
console.log(unique2([1, 2, 1, 3]))
