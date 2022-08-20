// https://leetcode-cn.com/problems/multiply-strings

var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0"
  const len1 = num1.length
  const len2 = num2.length
  const res = new Array(len1 + len2).fill(0)

  // 反过来求，更简单
  num1 = num1.split("").reverse().join("")
  num2 = num2.split("").reverse().join("")

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      // 0位和0位乘，值在0位，进位在1位
      const index = i + j
      const sum = num1[i] * num2[j] + res[index]
      res[index] = sum % 10
      res[index + 1] = res[index + 1] + parseInt(sum / 10)
    }
  }
  // 去掉前面的0
  while (res[res.length - 1] === 0) res.pop()
  return res.reverse().join("")
}
