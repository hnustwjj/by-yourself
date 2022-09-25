var pathSum = function (root, target) {
  const res = [];
  // 遍历整个二叉树
  function dfs(root, cache = [], sum = 0) {
    if (!root) return;
    // 回溯
    cache.push(root.val);
    // sum为target并且root是根节点
    if (sum + root.val === target && !root.left && !root.right)
      res.push([...cache]);
    else {
      // 继续遍历
      dfs(root.left, cache, sum + root.val);
      dfs(root.right, cache, sum + root.val);
    }
    cache.pop();
  }
  dfs(root);
  return res;
};
