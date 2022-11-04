// 后续遍历：每次弹出当前节点，压入左右节点，那么弹出顺序就是中右左，反过来就是左右中
var postorderTraversal = function (root) {
  const stk = [root];
  const res = [];
  while (stk.length) {
    const head = stk.pop();
    if (head) {
      res.push(head.val);
      if (head.left) stk.push(head.left);
      if (head.right) stk.push(head.right);
    }
  }
  return res.reverse();
};
