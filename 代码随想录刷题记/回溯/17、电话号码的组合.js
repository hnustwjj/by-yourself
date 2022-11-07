/**
 * 简单。。。
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  // 2-9对应的字母
  const map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const res = [];
  function dfs(current = 0, cache = "") {
    if (current === digits.length) {
      res.push(cache);
      return;
    }
    const num = digits[current] - 2;
    // 当前map[num]的每个字母都能加入cache
    for (let i = 0; i < map[num].length; i++) {
      dfs(current + 1, cache + map[num][i]);
    }
  }
  dfs();
  return res;
};
