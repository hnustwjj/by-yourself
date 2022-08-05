// https://leetcode.cn/problems/minimum-size-subarray-sum/
var minSubArrayLen = function (target, nums) {
  let left = 0
  let right = 0
  let sum = 0
  let res = Infinity
  // 滑动窗口，如果sum比target小，就拓展右
  // 否则就拓展左，并且更新最值
  while (right < nums.length) {
    if (sum < target) {
      sum += nums[right]
      right++
    } else {
      res = Math.min(res, right - left)
      sum -= nums[left]
      left++
    }
  }
  // 这个是right到右了，但是left内还有剩余的可以构成最值
  // 例如：target = 7, nums = [2,3,1,2,4,3]
  while (left < right && sum >= target) {
    res = Math.min(res, right - left)
    sum -= nums[left]
    left++
  }
  return res === Infinity ? 0 : res
}
