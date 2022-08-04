// https://leetcode.cn/problems/sum-root-to-leaf-numbers/
var sumNumbers = function (root) {
  let res = 0
  function dfs(node, sum = 0) {
    // 只有当左右子树同时不存在时，计算结果，防止只判断!node时的重复计算
    if (!node.left && !node.right) {
      res += sum * 10 + node.val
      return
    }

    // 只有存在再去递归
    node.left && dfs(node.left, sum * 10 + node.val)
    node.right && dfs(node.right, sum * 10 + node.val)
  }
  dfs(root)
  return res
}
