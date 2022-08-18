// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/

// 思路：保存路径，找前面相同的最后一个结点
var lowestCommonAncestor = function (root, p, q) {
  let pPath = null
  let qPath = null
  function dfs(node, cache = []) {
    // 递归终止条件
    if (!node) return

    // 回溯cache路径
    cache.push(node)
    // 保存路径
    node.val === p.val && (pPath = [...cache])
    node.val === q.val && (qPath = [...cache])
    if (pPath && qPath) return // 剪纸
    dfs(node.left, cache)
    dfs(node.right, cache)
    cache.pop()
  }
  dfs(root)
  let index = 0
  while (pPath[index] === qPath[index]) {
    index++
  }
  return pPath[index - 1]
}
