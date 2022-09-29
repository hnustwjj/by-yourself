/**
给定一棵二叉搜索树，请找出其中第 k 大的节点的值。

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4

 */
var kthLargest = function (root, k) {
  let count = 0;
  let res;
  // 二叉树的中序遍历，在遍历完右树（大于root.val的部分）时，对count进行++
  // 如果此时count === k，就说明是第k大结点
  function dfs(root) {
    if (!root) return;
    dfs(root.right);
    count++;
    if (count === k) res = root.val;
    dfs(root.left);
  }
  dfs(root);
  return res;
};
