function getPostOrderOfTree(preStr, midStr, cache = "") {
  if (preStr.length === 0) return ""
  const root = preStr[0]
  // 找出左右子树的线序和中序
  const midRight = midStr.slice(midStr.indexOf(root) + 1)
  const midLeft = midStr.slice(0, midStr.indexOf(root))

  const preLeft = preStr.slice(1, midLeft.length + 1)
  const preRight = preStr.slice(midLeft.length + 1)

  let res = ""
  // 先遍历完左，再遍历完右
  res += getPostOrderOfTree(preLeft, midLeft, cache)
  res += getPostOrderOfTree(preRight, midRight, cache)
  // 再将当前加入
  res += root
  return res
}

console.log(getPostOrderOfTree("ACDEFHGB", "DECAHFBG"))

