// https://leetcode.cn/problems/partition-equal-subset-sum/

// 转化成，能否拼成sum/2，如果可以的话，那么另一半也是sum/2
var canPartition = function (nums) {
  const sum = nums.reduce((p, n) => p + n)
  const target = sum / 2
  const row = nums.length
  if (~~target !== target) return false //如果平均数是小数，则返回false
  // 创建dp数组，代表的是前i个是否能组成j的和
  const dp = new Array(row + 1).fill(0).map(() => new Array(target + 1).fill(false))
  dp[0][0] = true //前0个能组成0的和
  for (let i = 1; i <= row; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j] //复制之前的状态，很重要
      // 判断前i个物品能否拼出j，就看前i-1个物品能否拼出j，或者看前i-1个物品能否拼出j-当前物品的重量
      if (nums[i - 1] <= j) { //防止下标溢出
        dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]]
      }
    }
  }
  return dp[row][target]
}
