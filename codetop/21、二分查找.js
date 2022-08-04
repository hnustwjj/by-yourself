// https://leetcode.cn/problems/binary-search/

// 最基本的二分，没啥好说的= =、
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = ~~((left + right) / 2)
    const num = nums[mid]
    if (num === target) {
      return mid
    } else if (num < target) {
      left++
    } else {
      right--
    }
  }
  return -1
}
console.log(search([-1, 0, 3, 5, 9, 12], 9))
