// https://leetcode.cn/problems/binary-tree-inorder-traversal/

// 先序遍历：每次弹出的是当前节点，直接压入右左节点，那么弹出就是中左右的顺序
var preorderTraversal = function (root) {
  const res = []
  const stk = [root]
  // 如果栈保存的是左孩子
  while (stk.length) {
    const head = stk.pop()
    if (head) {
      res.push(head.val)
      if (head.right) stk.push(head.right)
      if (head.left) stk.push(head.left)
    }
  }
  return res
}

// 后续遍历：每次弹出当前节点，压入左右节点，那么弹出顺序就是中右左，反过来就是左右中
var postorderTraversal = function (root) {
  const stk = [root]
  const res = []
  while (stk.length) {
    const head = stk.pop()
    if (head) {
      res.push(head.val)
      if (head.left) stk.push(head.left)
      if (head.right) stk.push(head.right)
    }
  }
  return res.reverse()
}

// 中序遍历：先将所有的左孩子压入，弹出时加入res
// 继续对右树进行当前操作
var inorderTraversal = function (root) {
  const res = []
  const stk = []
  while (stk.length || root) {
    while (root) {
      stk.push(root)
      root = root.left
    }
    const node = stk.pop()
    res.push(node.val)
    root = node.right
  }
  return res
}
