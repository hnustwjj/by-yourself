/**
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let res = Infinity;
  while (right < nums.length) {
    if (sum < target) sum += nums[right++];
    else {
      res = Math.min(right - left, res);
      sum -= nums[left++];
    }
  }
  // 这个是right到右了，但是left内还有剩余的可以构成最值
  // 例如：target = 7, nums = [2,3,1,2,4,3]
  while (left < right && sum >= target) {
    res = Math.min(res, right - left);
    sum -= nums[left++];
  }
  return res === Infinity ? 0 : res;
};
