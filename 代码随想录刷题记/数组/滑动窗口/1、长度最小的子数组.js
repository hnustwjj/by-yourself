/**
209. 长度最小的子数组
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
并返回其长度。如果不存在符合条件的子数组，返回 0 。
 */

var minSubArrayLen = function (target, nums) {
  const arr = [];
  let sum = 0;
  let res = Infinity;
  for(let i = 0 ; i < nums.length ; i++){
    sum = sum + nums[i]
    arr.push(nums[i])
    while(sum >= target){
      res = Math.min(res,arr.length)
      const f = arr.shift()
      sum -= f
    }
  }
  return res;
};

var minSubArrayLen = function (target, nums) {
  let sum = 0;
  // 用left和right代替数组
  let left = 0
  let right = 0 
  let res = Infinity;
  while(right < nums.length){
    sum = sum + nums[right]
    while(sum >= target){
      res = Math.min(res,right - left + 1)
      const f = nums[left++]
      sum -= f
    }
    right++
  }
  return res === Infinity ? 0 : res;
};


console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
