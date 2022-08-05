// https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/

var zigzagLevelOrder = function (root) {
  if (!root) return []
  let stack = [root]
  const res = []
  let flag = false
  while (stack.length) {
    let length = stack.length
    const cache = [] //保存结果
    const nextline = [] //保存下一行的内容
    while (length) {
      const node = stack.pop()  //每次从栈里面弹出一个点
      cache.push(node.val)
      // 如果是fals，就从左到右压（下一个弹出的顺序是从右到左，压入的顺序是从右到左）
      // 如果是true，就从右到座压（下一层弹出的顺序是从左到右，压入的顺序是从左到右）
      if (!flag) { 
        node.left && nextline.push(node.left)
        node.right && nextline.push(node.right)
      } else {
        node.right && nextline.push(node.right)
        node.left && nextline.push(node.left)
      }
      length--
    }
    flag = !flag
    stack = nextline
    res.push(cache)
  }
  return res
}
