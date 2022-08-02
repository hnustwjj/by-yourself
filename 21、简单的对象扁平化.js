const source = {
  a: {
    b: { c: 1, d: 2 },
    e: 3,
  },
  f: { g: 2 },
}
// 输出{ 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f.g': 2 }

function isObject(raw) {
  return typeof raw === "object" && raw !== null
}
function flat(raw) {
  const res = {}
  function dfs(obj, pre = "") {
    if (!isObject(obj)) return obj
    const keys = Object.keys()
    keys.forEach(key => {
      const value = obj[key]
      if (isObject(value)) {
        dfs(value, pre + key + ".")
      } else {
        res[pre + key] = value
      }
    })
  }
  dfs(raw)
  return res
}

// 可见还是用entries比较好阿
function flat(obj, ret = {}, pre = '') {
  Object.entries(obj).forEach(([key, value]) => {
		// 如果是对象，就保存当前的key，继续递归
		// 否则就添加属性
    isObject(value)
      ? flat(value, ret, pre + key + '.')
      : (ret[pre + key] = value)
  })
  return ret
}
console.log(flat(source))
