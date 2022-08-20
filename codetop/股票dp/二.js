// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/

// 思路，将所有的上升沿都记录下来就是结果

var maxProfit = function (prices) {
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1]
    }
  }
  return res
}
