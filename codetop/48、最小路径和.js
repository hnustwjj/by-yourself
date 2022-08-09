// https://leetcode.cn/problems/minimum-path-sum/submissions/

// 动态规划
var minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(201))
  dp[1][1] = grid[0][0]
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == 1 && j == 1) continue
      // 当前的最小路径是，上面的最小路径 与 左边的最小路径中的最小值 + 当前的路径值
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1]
    }
  }
  return dp[m][n]
}
