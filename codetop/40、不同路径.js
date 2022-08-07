// https://leetcode.cn/problems/unique-paths/

//思路很简单，到当前i，j格子的路径条数 = 到i-1,j的路径数 + 到 i，j-1的路径数
//用dp记录到i，j位置的路径数即可
var uniquePaths = function (m, n) {
  const dp = new Array(m + 1).fill(new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 && j === 1) {
        dp[1][1] = 1 // 初始化第一个格子的路径数为1
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m][n]
}
