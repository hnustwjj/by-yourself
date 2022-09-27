/**
剑指 Offer 42. 连续子数组的最大和
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

 

示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 

提示：

1 <= arr.length <= 10^5
-100 <= arr[i] <= 100
 */
var maxSubArray = function (nums) {
  // dp[i]表示以i结尾的最大子数组和
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 肯定要以i结尾，所以就拿i-1的最大值+第i，和第i比
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    res = Math.max(res, dp[i]);
  }
  return res;
};
