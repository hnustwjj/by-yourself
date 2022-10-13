// 递归的语意
// 遍历二叉树，返回p和q的最近公共祖先
// 那么这个最近公共祖先要怎么找呢？
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 如果当前左右子树对p和q的最近公共祖先都存在，那么说明p，q分别在左右子树，那么就返回当前节点
  if (left && right) return root;
  // 否则left为空，说明p和q都在右边
  if (!left) return right;
  if (!right) return left;

  // 左右都没有，说明树中不存在p和q节点
  return null;
};
