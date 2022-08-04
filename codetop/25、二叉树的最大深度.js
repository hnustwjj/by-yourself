// https://leetcode.cn/problems/maximum-depth-of-binary-tree/

//没啥好说的，dfs即可
var maxDepth = function (root, deep = 0) {
  if (!root) return deep
  return Math.max(
    maxDepth(root.left, deep + 1), 
    maxDepth(root.right, deep + 1)
  )
}
