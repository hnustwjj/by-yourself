// https://leetcode.cn/problems/reverse-words-in-a-string/
var reverseWords = function (s) {
  // 去掉头尾
  // 按照空格（多个）分割
  // 翻转
  // 拼接
  return s.trim().split(/\s+/).reverse().join(" ")
}

console.log(reverseWords("  hello world  "))
