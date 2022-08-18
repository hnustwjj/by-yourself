// 
var calculate = function (s) {
  let cache = []
  const type = ["+", "-", "*", "/"]
  let sum = 0
  let hasFlag = false  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue
    if (type.indexOf(s[i]) === -1) {
      sum = sum * 10 + parseInt(s[i])
    } else {
      hasFlag = true
      cache.push(sum)
      sum = 0
      cache.push(s[i])
    }
  }
  if (!hasFlag) return sum  // 标记是否有操作符，如果没有操作符就直接返回结果
  if (sum || s[s.length -1 ] === '0') cache.push(sum)  // 考虑末尾是0的情况
  let index = 0
  const stack = []  // 处理所有*、/的情况
  while (index < cache.length) {
    const type = cache[index]
    if (type === "/" || type === "*") {
      const pre = stack.pop()
      const next = cache[++index]
      if (type === "/") {
        stack.push(~~(pre / next))
      } else {
        stack.push(pre * next)
      }
    } else {
      stack.push(type)
    }
    index++
  }
  cache = null
  sum = stack[0] // 处理所有+ -的情况
  index = 1
  while (index !== stack.length) {
    if (stack[index] === "-") {
      const next = stack[++index]
      sum -= next
      index++
    } else if (stack[index] === "+") {
      const next = stack[++index]
      sum += next
      index++
    }
  }
  return sum
}
