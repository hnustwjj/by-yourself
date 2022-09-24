/**
输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

示例 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
示例 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
 

限制：

0 <= 节点个数 <= 5000

 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// 利用递归的语义，根据先序和中序，构建二叉树
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  // 找到根节点
  const root = new TreeNode(preorder[0]);
  const index = inorder.findIndex(i => i === root.val);
  // 找到左子树的先和中
  const leftInorder = inorder.slice(0, index);
  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  // 找到右子树的先和中
  const rightInorder = inorder.slice(index + 1);
  const rightPreorder = preorder.slice(1 + leftInorder.length);
  // 递归
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
};
buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
