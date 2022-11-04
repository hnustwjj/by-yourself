var permute = function (nums) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  const res = [];
  // [idx,...,nums.length - 1]的数都能放到当前位置
  function dfs(idx = 0) {
    // 长度符合要求，直接push
    if (idx === nums.length) {
      res.push([...nums]);
      return;
    }
    for (let i = idx; i < nums.length; i++) {
      swap(i, idx);
      // 继续递归
      dfs(idx + 1);
      swap(i, idx);
    }
  }
  dfs();
  return res;
};
