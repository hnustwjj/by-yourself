// https://leetcode.cn/problems/longest-common-subsequence/

var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length
  const n = text2.length
  // dp[i][j]表示text1[0...i]和text2[0...j]的最长公共子序列的长度
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    const s1 = text1[i - 1]
    for (let j = 1; j <= n; j++) {
      const s2 = text2[j - 1]
      if (s1 === s2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
}
