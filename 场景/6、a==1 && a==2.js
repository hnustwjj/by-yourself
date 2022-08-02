const a = {
  i: 1,
  toString() {
    return a.i++
  },
}
console.log(a == 1 && a == 2)
