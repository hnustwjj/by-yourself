// 简单，利用递归的语义，需要注意的是map保存已经clone的节点，防止无线递归

var cloneGraph = function(node,map = new Map()) {
  if(!node) return node
  if(map.has(node)) return map.get(node)
  const newNode = new Node(node.val)
  map.set(node,newNode)

  const neighbors = []
  node.neighbors.forEach(i=>{
      const res = cloneGraph(i,map)
      neighbors.push(res)
  })
  newNode.neighbors = neighbors
  return newNode
};