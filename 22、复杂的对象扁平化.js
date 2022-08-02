const input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null,
}
/*
  {
  a: 1,
  'b[0]': 1,
  'b[1]': 2,
  'b[2].c': true,
  'b[3][0]': 3,
  'd.e': 2,
  'd.f': 3
}
注意，省略掉null
*/
function isObject(raw) {
  return typeof raw === "object" && raw !== null
}

function flat(obj, preKey = "", res = {}) {
  if (!obj) return
  // 如果是数组调用entries，那么就是[index,value]
  // 如果是对象调用entries，那么就是[key,value]
  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // 判断当前value是从（obj)对象中取的还是从数组中取的，以决定key两边是否要加[]
      // 判断当前value的类型以决定key后要不要加.
      const temp = Array.isArray(obj) ? `${preKey}[${key}]` : `${preKey}${key}`
      flat(value, temp, res)
    } else if (typeof value === "object") {
      const temp = Array.isArray(obj) ? `${preKey}[${key}].` : `${preKey}${key}.`
      flat(value, temp, res)
    } else {
      const temp = Array.isArray(obj) ? `${preKey}[${key}]` : `${preKey}${key}`
      res[temp] = value
    }
  })
  return res
}
console.log(flat(input))
