// 题意就是标题
// 先用普通的做法，如果没有二叉搜索树的特性，就是记录path然后保存对应的路径，然后从前往后找最后面相同的节点即可
var lowestCommonAncestor = function (root, p, q) {
  let setp = [];
  let setq = [];
  function dfs(node = root, cache = []) {
    if (!node) return;
    // 因为自身也算，所以要在判断前加入路径数组中
    cache.push(node);
    if (node.val === p.val) {
      setp = [...cache];
    }
    if (node.val === q.val) {
      setq = [...cache];
    }
    dfs(node.left, cache);
    dfs(node.right, cache);
    cache.pop();
  }
  dfs();
  let res = root;
  for (let i = 0; i < Math.min(setp.length, setq.length); i++) {
    if (setp[i] === setq[i] && setp[i] && setq[i]) {
      res = setp[i];
    }
  }
  return res;
};


// 但是可以利用好二叉搜索树的性质
 var lowestCommonAncestor = function(root, p, q) {
  if(!root) return null
  if(root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left,p,q)
  if(root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right,p,q)
  return root
};