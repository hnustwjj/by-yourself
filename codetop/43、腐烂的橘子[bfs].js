// https://leetcode.cn/problems/rotting-oranges/

var orangesRotting = function (grid) {
  const queue = [] // 队列
  let cost = 0 // 要花费的时间
  const row = grid.length
  const col = grid[0].length
  let num1 = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      } else if (grid[i][j] === 1) num1++
    }
  }
  if (!num1) return 0
  while (queue.length && num1) {
    //如果没有新鲜橘子就不用继续了
    let length = queue.length
    while (length) {
      const [x, y] = queue.shift()
      // 判断上下左右，进入队列
      if (x > 0 && grid[x - 1][y] === 1) {
        queue.push([x - 1, y])
        grid[x - 1][y] = 2
        num1--
      }
      if (y > 0 && grid[x][y - 1] === 1) {
        queue.push([x, y - 1])
        grid[x][y - 1] = 2
        num1--
      }
      if (x < row - 1 && grid[x + 1][y] === 1) {
        queue.push([x + 1, y])
        grid[x + 1][y] = 2
        num1--
      }
      if (y < col - 1 && grid[x][y + 1] === 1) {
        queue.push([x, y + 1])
        grid[x][y + 1] = 2
        num1--
      }
      length--
    }
    cost++
  }
  return num1 === 0 ? cost : -1 // 如果还有新鲜橘子，则返回-1
}

console.log(orangesRotting([[1, 2]]))
