// https://leetcode.cn/problems/generate-parentheses/

var generateParenthesis = function (n) {
  const res = []
  function dfs(left, right, str = "") {
    // 如果某个时刻，右括号的数量大于左括号，就直接return
    if (right > left || left > n || right > n) return
    if (left === n && right === n) {
      res.push(str)
      return
    }
    dfs(left + 1, right, str + "(")
    dfs(left, right + 1, str + ")")
  }
  dfs(0, 0)
  return res
}
console.log(generateParenthesis(1))
