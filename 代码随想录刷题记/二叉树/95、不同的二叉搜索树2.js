var generateTrees = function(n) {
  if(n === 0) return []
  return recursion(1, n)
};

function recursion(start, end){
  // 如果start > end，那么不能构造出二叉搜索树，返回
  if(start > end) return [null]
  let allTrees = []
  // 枚举start 到end的所有二叉搜索树的根节点，分别构造左右子树
  for(let i = start; i <= end; i++){
      let leftTrees = recursion(start, i - 1)
      let rightTrees = recursion(i + 1, end)

      // 构造出来后进行拼接
      for(let left of leftTrees){
          for(let right of rightTrees){
              let cur = new TreeNode(i)
              cur.left = left
              cur.right = right
              allTrees.push(cur)
          }
      }
  }
  return allTrees
}
