const str = "?a=1&b=2&c=3"
function parse(url) {
  const arr = str.slice(1).split("&")
  const res = {}
  arr.forEach(it => {
    const [key, value] = it.split("=")
    res[key] = value
  })
  return res
}
function parseOne(url) {
  let str = url.slice(1)
  const res = {}
  str.replace(/(\w+)=(\w+)/g, ($, $1, $2) => {
    res[$1] = $2
  })
  return res
}
console.log("res", parseOne("?name=pp&hh=oo&uu"))
