// https://leetcode.cn/problems/binary-tree-right-side-view/

// 思路：层序遍历，每层将最右侧的节点叉入到res中即可
var rightSideView = function (root) {
  if (!root) return []
  const res = []
  const stack = [root]
  while (stack.length) {
    let len = stack.length
    while (len) {
      const node = stack.shift()
      if (len === 1) {
        // 最右侧的节点
        res.push(node.val)
      }
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
      len--
    }
  }
  return res
}
