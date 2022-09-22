// https://leetcode.cn/problems/longest-increasing-subsequence/

var lengthOfLIS = function (nums) {
  // dp[i]表示到第i个的最长递增子序列的长度
  // dp[i] = dp[0....i-1]max + 1
  const dp = new Array(nums.length).fill(1);
  let res = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        res = Math.max(res, dp[i]);
      }
    }
  }

  return res;
};
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
