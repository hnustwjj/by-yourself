// 如果长度小于等于3，就不需要转化，否则就切分字符串
function parse(str) {
  if (str.length <= 3) return str
  const left = str.slice(0, str.length - 3)
  const right = str.slice(str.length - 3)
  return parse(left) + "." + right
}

console.log(parse('11111111111'))