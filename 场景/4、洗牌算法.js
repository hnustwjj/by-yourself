function xp(arr) {
  let len = arr.length
  // 从后往前的话，就不需要计算区间内的随机数了，左侧默认是0即可
  while (len) {
    const index = ~~(Math.random() * len--)
    let temp = arr[index]
    arr[index] = arr[len]
    arr[len] = temp
  }
}

const a = [1, 2]
xp(a)
console.log(a)
