var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const que = [root];
  // 标记当前是正序还是逆序
  let flag = true;
  while (que.length) {
    let len = que.length;
    const cache = [];
    // 正常的层序遍历
    while (len) {
      const node = que.shift();
      cache.push(node.val);
      if (node.left) que.push(node.left);
      if (node.right) que.push(node.right);
      len--;
    }

    // 判断插入
    if (flag) res.push(cache);
    else res.push(cache.reverse());
    flag = !flag;
  }
  return res;
};
