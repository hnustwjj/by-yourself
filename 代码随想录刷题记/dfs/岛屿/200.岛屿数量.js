// 链接：https://leetcode.cn/problems/number-of-islands

var numIslands = function (grid) {
  const row = grid.length
  const column = grid[0].length

  // 清除当前以及四周的石头
  function clear(i, j) {
    if (grid[i][j] !== "1") return
    grid[i][j] = "0"
    if (i > 0) clear(i - 1, j)
    if (i < row - 1) clear(i + 1, j)
    if (j < column - 1) clear(i, j + 1)
    if (j > 0) clear(i, j - 1)
  }
  // 标记有多少岛屿
  let res = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      // 遇到一个石头，就将岛屿++，并且将这个石头边上的石头都清除
      if (grid[i][j] === "1") {
        res++
        clear(i, j)
      }
    }
  }
  return res
}
