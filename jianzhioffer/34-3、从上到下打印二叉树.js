/**
  请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

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
  [20,9],
  [15,7]
]
*/
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  // 设置一个标志位就可以了

  let flag = false;
  while (queue.length) {
    let len = queue.length;
    let cache = [];
    while (len--) {
      const node = queue.shift();
      cache.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (flag) cache = cache.reverse();
    flag = !flag;
    res.push(cache);
  }
  return res;
};
