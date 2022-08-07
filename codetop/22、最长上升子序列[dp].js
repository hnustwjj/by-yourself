// https://leetcode.cn/problems/longest-increasing-subsequence/

var lengthOfLIS = function (nums) {
  // dp数组表示到当前位置，最长递增子序列的长度
  const dp = new Array(nums.length).fill(1)
  let res = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 如果后面的j位置的数大于i位置的数，那么就更新j位置的最大值
      if (nums[j] > nums[i]) {
        dp[j] = Math.max(dp[i] + 1, dp[j])
        res = Math.max(res, dp[j])
      }
    }
  }

  return res
}
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
