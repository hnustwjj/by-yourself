/**
剑指 Offer 57. 和为s的两个数字
输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
 */

// 因为是有序的，所以双指针即可
var twoSum = function(nums, target) {
  const res = []
  let left = 0
  let right = nums.length - 1
  while(left < right){
      const sum = nums[left] + nums[right]
      if(sum === target) {
          res.push(nums[left++],nums[right--])
          break;
      }
      else if(sum > target) right--
      else left++
  }
  return res
};