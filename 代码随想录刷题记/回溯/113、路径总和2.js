 var pathSum = function(root, targetSum) {
  const res = []
  function dfs(node,path = [],sum = 0){
      if(!node) return
      // 在没有孩子并且sum === target的时候push到res中
      if(!node.left && !node.right && sum+node.val === targetSum){
          res.push([...path,node.val])
          return
      }

      // 回溯
      path.push(node.val)
      dfs(node.left,path,sum+node.val)
      dfs(node.right,path,sum+node.val)
      path.pop()
  }

  dfs(root)
  return res
};