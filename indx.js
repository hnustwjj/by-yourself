// https://leetcode.cn/problems/longest-well-performing-interval/

// 思路，将8改为-1和1，转化为前缀和问题
// 求的就是区间内和大于0的最大值
var longestWPI = function (hours) {
  hours = hours.map(i => (i > 8 ? 1 : -1))
  let res = 0
  // 语义就是前i个的和
  let preSum = new Array(hours.length + 1).fill(0)
  // 例如要求0-3的和，就是preSum[4] - preSum[0],前四个的和-前0个的和
  for (let i = 0; i < hours.length; i++) {
    preSum[i + 1] = preSum[i] + hours[i]
  }
  for (let i = 0; i < hours.length; i++) {
    // 暴力判断区间和是否大于0
    for (let j = i + 1; j <= hours.length; j++) {
      if (preSum[j] - preSum[i] > 0) {
        res = Math.max(res, j - i)
      }
    }
  }
  return res
}

// 解法2：用于map标记每个前缀和的最左侧位置
// 如果前缀和小于等于0，就判断该前缀和-1在map中是否存在，如果存在则说明对应的下标到当前位置的区间内1的个数大于-1
var longestWPI = function (hours) {
  hours = hours.map(i => (i > 8 ? 1 : -1))
  let res = 0
  let sum = 0
  let map = {}
  for (let i = 0; i < hours.length; i++) {
    sum += hours[i]
    if (map[sum] === undefined) {
      map[sum] = i
    }
    // 如果从0开始的前缀和大于0，那么就说明区间内的1大于-1，是符合要求的
    if (sum > 0) {
      res = i + 1
      continue
    }
    if (map[sum - 1] !== undefined) {
      res = Math.max(res, i - map[sum - 1])
    }
  }
  return res
}
console.log(longestWPI([6, 9, 6]))
