function parse(num) {
  if(num % 2 === 0) return num
  const arr = []
  while (num) {
    arr.push(num % 10)
    num = ~~(num / 10)
  }
  arr.reverse()
  const target = arr.findIndex(i => i % 2 === 0)
  if (target !== -1) {
    [arr[target], arr[arr.length - 1]] = [arr[arr.length - 1], arr[target]]
    return arr.join('')
  }
  return -1
}
console.log(parse(1111))