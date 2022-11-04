/**
 二叉搜索树，左中右，中序遍历的时候更新cnt，并且判断
 */
var kthSmallest = function (root, k) {
  let cnt = 0;
  let res;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    cnt++;
    if (cnt === k) {
      res = root.val;
      return;
    }
    dfs(root.right);
  }
  dfs(root);
  return res;
};
