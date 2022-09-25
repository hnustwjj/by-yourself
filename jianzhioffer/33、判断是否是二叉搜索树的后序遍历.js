// 递归的语义，根据后续遍历判断是否是二叉搜索树
var verifyPostorder = function (postorder) {
  // 特殊情况判断
  if (postorder.length <= 1) return true;

  // 当前
  let root = postorder[postorder.length - 1];
  // 找到第一个大于root的节点位置，去切分左右子树
  let index = postorder.findIndex(i => i > root);
  let right = postorder.slice(index, postorder.length - 1);
  let left = postorder.slice(0, index);
  let flag = true;

  // 判断右树是否都比root大
  for (const i of right) {
    if (i < root) flag = false;
  }

  // 判断左树是否都比root小
  for (const i of left) {
    if (i > root) flag = false;
  }

  // 如果flag，并且左右子树都是二叉搜索树
  return flag && verifyPostorder(left) && verifyPostorder(right);
};
