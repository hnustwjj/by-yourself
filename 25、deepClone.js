// 要求：
// 处理数组
// 处理set和map
// 处理symbol
// 处理循环引用
function isObject(raw) {
  return typeof raw === "object" && raw !== null
}
function deepClone(raw, map = new Map()) {
  if (!isObject(raw)) return raw
  if (raw instanceof Set) return new Set(raw)
  if (raw instanceof Map) return new Map(raw)
  if (raw instanceof Symbol) return Symbol(raw.description)

  if (map.has(raw)) return map.get(raw)
  const res = Array.isArray(raw) ? [] : {}
  map.set(raw, res)
  const keys = Object.keys(raw)

  keys.forEach(key => {
    const value = raw[key]
    res[key] = !isObject(value) ? value : deepClone(value, map)
  })

  const symbolKeys = Object.getOwnPropertySymbols(raw)
  symbolKeys.forEach(key => {
    const value = raw[key]
    res[key] = !isObject(value) ? value : deepClone(value, map)
  })
  return res
}
const s = Symbol(1)
const obj = {
  name: 1,
  age: 20,
  arr: [],
  set: new Set(),
  map: new Map(),
  [s]: 1,
  s: Symbol(1),
}
obj.a = obj
const obj2 = deepClone(obj)
console.log(obj, obj2, obj === obj2)
