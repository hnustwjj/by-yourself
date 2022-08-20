// https://leetcode.cn/problems/thousand-separator/

// 写体操写习惯了，就会有这种思路
var thousandSeparator = function (n) {
  function parse(str) {
    if (str.length <= 3) return str
    const right = str.slice(str.length - 3)
    const left = str.slice(0, str.length - 3)
    return parse(left) + "." + right
  }
  return parse(n + "")
}
