function yosf(arr, num = 3, current = 0) {
  if (arr.length === 1) return arr
  const index = (current + num - 1) % arr.length
  arr.splice(index, 1)
  if (index === arr.length) {
    // 如果是最后一个滚蛋了，那么下一个报数的就是第一个
    return yosf(arr, num, 0)
  } else {
    return yosf(arr, num, index)
  }
}
let allplayer = []
for (let i = 0; i < 30; i++) {
  allplayer[i] = i + 1
}
console.log(yosf(allplayer, 3))
