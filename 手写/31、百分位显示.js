// 如果长度小于等于3，就不需要转化，否则就切分字符串
function parse1(str) {
  if (str.length <= 3) return str
  const left = str.slice(0, str.length - 3)
  const right = str.slice(str.length - 3)
  return parse1(left) + "." + right
}

function parse2(str) {
  return str.replace(/(\d{1,3})(?=(\d{3})+$)/g, ($, $1) => {
    return $1 + ","
  })
}

console.log(parse1("1111111111111111111"))
console.log(parse2("1111111111111111111"))
