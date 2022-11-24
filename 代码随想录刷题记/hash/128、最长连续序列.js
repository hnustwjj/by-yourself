/**
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let cnt = 1;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果没有前一个，说明是序列的开始
    if (!set.has(nums[i] - 1)) {
      let num = nums[i];
      // 找所有
      while (set.has(num + 1)) {
        cnt++;
        num++;
      }
      // 设置res
      res = Math.max(res, cnt);
      cnt = 1;
    }
  }
  return res;
};
