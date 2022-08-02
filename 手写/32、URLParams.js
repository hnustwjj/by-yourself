let url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled"
parse(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

function parse(str) {
  const params = str.split("?")[1]
  const res = {}
  const entries = params.split("&").map(kv => kv.split("="))
  entries.forEach(([key, value]) => {
    if (value) {
      value = decodeURI(value)
      res[key] = res[key] ? Array.prototype.concat(res[key], value) : value
    }
  })
  console.log(res)
  return res
}
