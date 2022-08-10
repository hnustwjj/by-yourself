// https://leetcode.cn/problems/longest-common-prefix/

// 暴力就完事了
var longestCommonPrefix = function (strs) {
  let min = Infinity
  let ans = ""
  for (const str of strs) {
    min = Math.min(min, str.length)
  }
  for (let i = 0; i < min; i++) {
    let res = true
    for (let j = 1; j < strs.length; j++) {
      res &= strs[j][i] === strs[j - 1][i]
    }
    if (res) ans = ans + strs[0][i]
    else break
  }
  return ans
}
