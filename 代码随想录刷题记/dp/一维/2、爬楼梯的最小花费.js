/**
  有cost.length层楼梯，就有cost.length + 1层
  我们可以从第0或者第1个阶梯开始，就是说我们可以默认到第0层和第1层
*/
var minCostClimbingStairs = function (cost) {
  const dp = new Array(cost.length + 1).fill(0);
  for (let i = 2; i <= cost.length; i++) {
    // 到i-1层的花费+i-1层阶梯的花费
    // 到i-2层的花费+i-2层阶梯的花费
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[cost.length];
};
