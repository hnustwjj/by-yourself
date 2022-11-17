// 其实就是利用递归的语意，根据nums构建二叉搜索树
// 为了让二叉搜索树尽量平衡，我们需要截取中间的元素，分别对左右区间进行构建二叉搜索树
var sortedArrayToBST = function(nums) {
  if(nums.length === 0) return null
  const mid = ~~(nums.length / 2)
  const node = new TreeNode(nums[mid])
  const left = sortedArrayToBST(nums.slice(0,mid))
  const right = sortedArrayToBST(nums.slice(mid+1))
  node.left = left
  node.right = right
  return node
};