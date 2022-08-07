// https://leetcode.cn/problems/max-area-of-island/
var maxAreaOfIsland = function (grid) {
  const row = grid.length
  const column = grid[0].length
  function find(i, j) {
    if (grid[i][j] === 0) return 0
    // 计算四周的岛屿面基+当前的1个面积就是返回值
    let res = 1
    grid[i][j] = 0 //标记当前岛屿找过了
    if (i > 0) res += find(i - 1, j)
    if (i < row - 1) res += find(i + 1, j)
    if (j > 0) res += find(i, j - 1)
    if (j < column - 1) res += find(i, j + 1)
    return res
  }
  let max = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 1) {
        const res = find(i, j)
        max = Math.max(max, res)
      }
    }
  }
  return max
}
console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
)
