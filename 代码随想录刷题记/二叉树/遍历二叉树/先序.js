// 先序要求的是，中左右
// 先保存中
var preorderTraversal = function (root) {
  const stk = [root];
  const res = [];
  while (stk.length) {
    const node = stk.pop();
    if (node) {
      res.push(node.val);
      // 然后弹出栈，为了保证弹栈时是 左、右的顺序，则需要反着压入栈
      if (node.right) stk.push(node.right);
      if (node.left) stk.push(node.left);
    }
  }
  return res;
};
