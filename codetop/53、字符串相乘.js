// https://leetcode.cn/problems/multiply-strings/

// 思路：利用
const num1 = "123"
const num2 = "456"
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0"
  const len1 = num1.length
  const len2 = num2.length
  const res = new Array(len1 + len2).fill(0)

  //翻转了之后，处理下标比较方便
  num1 = num1.split("").reverse().join("")
  num2 = num2.split("").reverse().join("")

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      // 第0位和第0位相乘，答案保存在第0位，进位保存在第1位
      const index = i + j
      const sum = num1[i] * num2[j] + res[index]
      res[index] = sum % 10
      // 不要忘记累加进位
      res[index + 1] = res[index + 1] + parseInt(sum / 10)
    }
  }
  while (res[res.length - 1] === 0) res.pop()
  return res.reverse().join("")
}

console.log(multiply(num1, num2))
