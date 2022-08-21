// https://leetcode.cn/problems/decode-string/

// 思路：递归，对[]中间的内容进行处理
// 根据调试情况来看，有的地方需要i++和i-- 。。。。。= =、
var decodeString = function (s) {
  if (s.length === 0) return ""
  let res = ""
  let left = 0 // 左括号个数
  let lefti = 0 // 第一个左括号的位置
  let right = 0 // 右括号个数
  let i = 0
  while (i < s.length) {
    if (Number.isNaN(parseInt(s[i]))) {
      res += s[i]
    } else if (Number.isNaN(parseInt(s[i])) >= 0) {
      let count = parseInt(s[i++])
      // 找数
      while (s[i] !== "[") {
        count = count * 10 + parseInt(s[i])
        i++
      }
      // 当前位就是左括号
      lefti = i
      left++
      i++
      // 找到对应的右括号的下标
      while (right !== left && i < s.length) {
        if (s[i] === "[") left++
        if (s[i] === "]") right++
        i++
      }
      // 回退一个
      i--
      const result = decodeString(s.slice(lefti + 1, i - 1))
      for (let i = 0; i < count; i++) {
        res += result
      }
    }
    i++
  }
  return res
}

console.log(decodeString("2[abc]3[cd]ef"))
