// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/

// 中序遍历即可
var kthSmallest = function (root, k) {
  const cache = []
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    cache.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  return cache[k - 1]
}
