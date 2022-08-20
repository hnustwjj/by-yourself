// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/

// 思路，维护到i的最小值，每次更新i后差值的最大值就是答案
var maxProfit = function (prices) {
  let min = prices[0]
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      res = Math.max(res, prices[i] - min)
    }
  }
  return res
}
