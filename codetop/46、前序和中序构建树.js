// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// 递归，利用语义，当前语义是，根据前序遍历和中序遍历构造树
// 那么我们就可以利用这个语义，找到当前结点的左右孩子对应的前序和中序的数组，构造子树
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null
  const root = new TreeNode(preorder[0])
  const leftlen = inorder.indexOf(root.val)
  
  // 截取出左树的前序和中序
  const leftChildin = inorder.slice(0, leftlen)
  const leftChildpre = preorder.slice(1, 1 + leftlen)

  //截取出右树的前序和中序数组
  const rightChildin = inorder.slice(leftlen + 1)
  const rightChildpre = preorder.slice(leftlen + 1)

  // 利用buildTree这个语义，去完成左右树的构建，然后赋值，相当于是后续遍历
  root.left = buildTree(leftChildpre, leftChildin)
  root.right = buildTree(rightChildpre, rightChildin)
  return root
}
