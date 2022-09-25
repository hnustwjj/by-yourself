/**
 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

  例如:
  给定二叉树: [3,9,20,null,null,15,7],

      3
    / \
    9  20
      /  \
    15   7
  返回其层次遍历结果：

  [
    [3],
    [9,20],
    [15,7]
  ]
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let len = queue.length;
    const cache = [];
    while (len--) {
      const node = queue.shift();
      cache.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(cache);
  }
  return res;
};
