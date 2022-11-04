// https://leetcode.cn/problems/coin-change/
var coinChange = function (coins, amount) {
  if (amount === 0) return 0
  // dp表示到当前价钱最少的硬币数
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  // 每个硬币对应的花费，算一个硬币就可以达到
  coins.forEach(cost => (dp[cost] = 1))

  // 开始从前往后更新dp
  for (let i = 1; i <= amount; i++) {
    let min = Infinity
    for (let j = 0; j < coins.length; j++) {  
      // 如果当前价钱（i）减去这个硬币的花费是存在的，就进行更新
      const cost = coins[j]
      const index = i - cost
      if (index >= 0 && dp[index] !== Infinity) {
        min = Math.min(dp[index], min)
      }
    }
    if(min !== Infinity) dp[i] = min + 1
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}