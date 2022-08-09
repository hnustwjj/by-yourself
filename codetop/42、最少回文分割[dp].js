// https://leetcode.cn/problems/omKAoA/
// 最少分割次数，其实就是求最少能有几个回文串罢了


var minCut = function (s) {
  const len = s.length
  const isHw = new Array(len).fill(0).map(() => new Array(len).fill(false))
  // 预处理，用于判断i,j-1是否是回文串
  for (let i = 0; i < len; i++) {
    let r = i
    let l = i
    while (l >= 0 && r < len && s[l] === s[r]) {
      isHw[l][r] = true
      l--
      r++
    }
    r = i + 1
    l = i
    while (l >= 0 && r < len && s[l] === s[r]) {
      isHw[l][r] = true
      l--
      r++
    }
  }
  // dp[i]表示前i个能组成的最少回文串的个数
  const dp = new Array(len+1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (isHw[j][i-1]) {  // 如果在i-1位置之前有回文串，就更新dp[i]
        dp[i] = Math.min(dp[j] + 1, dp[i])
      }
    }
  }
  return dp[len] - 1
}

console.log(minCut("aab"))
