/**
  583:
  给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

  每步 可以删除任意一个字符串中的一个字符。

   

  示例 1：

  输入: word1 = "sea", word2 = "eat"
  输出: 2
  解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
  示例  2:

  输入：word1 = "leetcode", word2 = "etco"
  输出：4
   

  提示：

  1 <= word1.length, word2.length <= 500
  word1 和 word2 只包含小写英文字母
 */

  // 其实就是求最长公共子序列，进行一个减法而已
var minDistance = function (word1, word2) {
  const n = word1.length;
  const m = word2.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const s1 = word1[i - 1];
      const s2 = word2[j - 1];
      if (s1 === s2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return n + m - dp[n][m] * 2;
};
