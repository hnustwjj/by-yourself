/**
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

 

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

 */

// 树形dp？
var isBalanced = function (root) {
  function foo(root) {
    if (!root) return [true, 0]; //[是平衡二叉树，深度为0]
    const left = foo(root.left);
    const right = foo(root.right);
    if (left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1)
      return [true, Math.max(left[1], right[1]) + 1];
    // 否则返回false
    return [false];
  }
  return foo(root)[0];
};
