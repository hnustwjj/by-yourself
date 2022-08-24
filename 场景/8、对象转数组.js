const raw = {
  value: "1",
  label: "节点1",
  children: [
    {
      value: "2",
      label: "节点1-1",
      children: [
        {
          value: "3",
          label: "节点1-1-1",
        },
      ],
    },
    {
      value: "4",
      label: "节点2",
    },
  ],
}

const res = [
  { value: 1, label: "节点1" },
  { value: 2, parentId: 1, label: "节点1-1" },
  { value: 3, parentId: 2, label: "节点1-1-1" },
  { value: 4, parentId: 1, label: "节点1-2" },
]

// 先将所有的key，value保存在map中，key是儿子，value是父亲
function parse(raw, pre = null, map = new Map()) {
  if (!raw) return
  map.set(raw, pre)
  const { children } = raw
  children?.forEach(i => parse(i, raw, map))
  return map
}
const map = parse(raw)

const res1 = []
// 遍历每个对象
const keys = map.keys()

for (const item of keys) {
  const parent = map.get(item)
  const { children, ...other } = item
  if (parent) {
    res1.push({ ...other, parentId: parent.value })
  } else {
    res1.push(other)
  }
}
console.log(res1)
