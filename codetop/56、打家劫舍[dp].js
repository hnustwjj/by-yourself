// https://leetcode.cn/problems/house-robber/

//  思路，dp，当前房子能偷到最多的价格，肯定是隔着一间房子前面的能偷到最大的价格加上当前房子能偷到的价格
var rob = function (nums) {
  const len = nums.length
  if (len === 1) return nums[0]
  if (len === 2) return Math.max(nums[0], nums[1])
  
  // dp
  const dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  dp[1] = nums[1]
  // 初值
  let res = Math.max(dp[0], dp[1])
  for (let i = 2; i < nums.length; i++) {
    let max = 0
    // 找前面能偷到的最大的价格
    for (let j = 0; j < i - 1; j++) {
      max = Math.max(max, dp[j])
    }
    // 更新当前能偷到的最大的价格
    dp[i] = max + nums[i]
    res = Math.max(res, dp[i])
  }
  return res
}
