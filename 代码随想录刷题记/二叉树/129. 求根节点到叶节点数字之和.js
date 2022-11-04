var sumNumbers = function (root) {
  let res = 0;
  // 递归cache保存路径上的值
  function dfs(root, cache = 0) {
    // 只有当没有叶子结点的时候才进行统计
    if (!root.left && !root.right) {
      res += cache * 10 + root.val;
      return;
    }
    // 递遍历二叉树
    if (root.left) dfs(root.left, cache * 10 + root.val);
    if (root.right) dfs(root.right, cache * 10 + root.val);
  }
  dfs(root);
  return res;
};
