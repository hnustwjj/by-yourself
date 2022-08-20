// https://leetcode.cn/problems/simplify-path/
/**
输入：path = "/../"
输出："/"

输入：path = "/home/"
输出："/home"

输入：path = "/home//foo/"
输出："/home/foo"

输入：path = "/a/./b/../../c/"
输出："/c"

*/

// 思路：用栈来模拟，遇到..就出栈，遇到.或者空就跳过,遇到其他的就入栈
var simplifyPath = function (path) {
  let arr = path.split("/")
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "..") {
      stack.pop()
    } else if (arr[i] === "." || arr[i] === "") {
      continue
    } else {
      stack.push(arr[i])
    }
  }

  // 初始的/
  return "/" + stack.join("/")
}
