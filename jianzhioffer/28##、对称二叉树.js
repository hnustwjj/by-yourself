/**
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3    
    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

 */

// 思路，其实判断是否是对称二叉树，就是两棵树之间进行比较
// 判断左树是否跟右树是对称的，也判断右树是否跟左树是对称的
var isSymmetric = function (root) {
  function check(A, B) {
    if (!A && !B) return true;
    if (!A || !B || A.val !== B.val) return false;

    return A.val === B.val && check(A.left, B.right) && check(A.right, B.left);
  }
  return check(root, root);
};
