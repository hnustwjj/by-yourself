var partition = function (s) {
  // 回溯找到所有的可能性
  const dfs = i => {
    if (i === n) {
      ret.push(ans.slice());
      return;
    }
    for (let j = i; j < n; ++j) {
      if (f[i][j]) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  };

  const n = s.length;
  // 用f[i][j]记录i...j是否为回文串
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
  let ret = [],
    ans = [];

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      f[i][j] = s[i] === s[j] && f[i + 1][j - 1];
    }
  }
  dfs(0);
  return ret;
};
