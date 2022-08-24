// 转换前：
const source = [
  {
    id: 1,
    pid: 0,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 2,
    name: "div",
  },
]
const tree = [
  {
    id: 1,
    pid: 0,
    name: "body",
    children: [
      {
        id: 2,
        pid: 1,
        name: "title",
        children: [
          {
            id: 3,
            pid: 1,
            name: "div",
          },
        ],
      },
    ],
  },
]

function parse(arr) {
  const cache = new Map()
  const res = []

  // 保存每一个id
  arr.forEach(item => {
    cache.set(item.id, item)
  })

  // 重新遍历，如果pid不存在说明是顶级父亲，放入res
  // 否则就加入对应父亲的children中
  arr.forEach(item => {
    const parent = cache.get(item.pid)
    if (!parent) res.push(item)
    else {
      parent.children = parent.children ?? []
      parent.children.push(item)
    }
  })
  return res
}

console.log(JSON.stringify(parse(source)))
