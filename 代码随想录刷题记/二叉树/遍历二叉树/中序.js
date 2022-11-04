// 中序遍历：先将所有的左孩子压入，弹出时加入res
// 继续对右树进行当前操作
var inorderTraversal = function (root) {
  const res = [];
  const stk = [];
  while (stk.length || root) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    const node = stk.pop();
    res.push(node.val);
    root = node.right;
  }
  return res;
};
