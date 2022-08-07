// https://leetcode.cn/problems/invert-binary-tree/

// 定义一个函数，叫做翻转
// 如何翻转当前二叉树呢？肯定是将左孩子翻转成功，将右孩子翻转成功，然后再切换左右子树
// 一定是要在左右孩子反转完之后进行切换
// 其实就是一个后续遍历
var invertTree = function (root) {
  function fanzhuan(root) {
    if (!root) return
    fanzhuan(root.left)
    fanzhuan(root.right)
    let temp = root.left
    root.left = root.right
    root.right = temp
  }
  fanzhuan(root)
  return root
}
