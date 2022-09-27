/**
  输入一个字符串，打印出该字符串中字符的所有排列。

  你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

  示例:

  输入：s = "abc"
  输出：["abc","acb","bac","bca","cab","cba"]
 */

// 思路：回溯罢了
var permutation = function (s) {
  const arr = [...s];
  const res = new Set(); // 去重
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  function dfs(index = 0, cache = "") {
    if (index === s.length) {
      res.add(cache);
      return;
    }
    // 后面的放到当前位
    for (let i = index; i < arr.length; i++) {
      swap(arr, i, index);
      dfs(index + 1, cache + arr[index]);
      swap(arr, i, index);
    }
  }
  dfs();
  return [...res];
};
