// 利用递归的语意，对左右子树进行构建操作，然后讲左右子树构建出来的链表拼接到right指针
// 不要忘记讲left指向空
var flatten = function (r) {
  
  function dfs(root) {
    if (!root) return;
    let node = root;

    const left = dfs(root.left);
    const right = dfs(root.right);

    node.left = null;
    if (left) {
      node.right = left;
      while (node.right) {
        node = node.right;
      }
    }
    if (right) {
      node.right = right;
    }
    return root;
  }
  dfs(r);
};
