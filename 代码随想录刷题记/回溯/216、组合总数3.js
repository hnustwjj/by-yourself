/**
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

  只使用数字1到9
  每个数字 最多使用一次 
  返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

  输入: k = 3, n = 7
  输出: [[1,2,4]]
  解释:
  1 + 2 + 4 = 7
  没有其他符合的组合了。
 */
var combinationSum3 = function (k, n) {
  const res = [];
  function dfs(sum = 0, cur = 0, cache = []) {
    // 判断
    if (cache.length === k && sum === n) {
      res.push([...cache]);
      return;
    }
    // 剪枝
    if (sum > n || cache.length > k) return;
    // 回溯
    for (let i = cur + 1; i <= 9; i++) {
      cache.push(i);
      dfs(sum + i, i, cache);
      cache.pop();
    }
  }
  dfs();
  return res;
};
