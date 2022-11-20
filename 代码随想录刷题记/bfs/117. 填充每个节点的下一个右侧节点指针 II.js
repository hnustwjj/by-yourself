// 虽然题目要求的是常数级别的空间复杂度，但是直接用常规bfs也无所谓 = =、

var connect = function(root) {
  if (!root) return null
  let q = [root]
  while (q.length) {
      let size = q.length
      let pre = null

      for (let i=0; i<size; i++) {
          let node = q.shift()
          node.next = pre

          pre = node
          // 从右往左边遍历
          if(node.right) q.push(node.right)
          if(node.left) q.push(node.left)
      }
  } 

  return root
};
