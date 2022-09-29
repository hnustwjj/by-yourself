/**
统计一个数字在排序数组中出现的次数。

 

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0

*/

// 升序数组
var search = function (nums, target) {
  const left = findLeft(nums, target);
  const right = findRight(nums, target);
  console.log(left, right);
  return right - left + 1;
};

// 找到等于的最左边
function findLeft(nums, target) {
  let left = 0;
  let right = nums.length - 1; // [left,right]
  while (left <= right) {
    const mid = left + ~~((right - left) / 2);
    // 中间的大于目标值，说明在前面
    if (nums[mid] < target) {
      left = mid + 1;
      // 中间的小于目标值，说明在后面
    } else {
      right = mid - 1;
    }
  }
  return left;
}

// 找到等于的最右边
function findRight(nums, target) {
  let left = 0;
  let right = nums.length - 1; // [left,right]
  while (left <= right) {
    const mid = left + ~~((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
      // 中间的小于目标值，说明在后面
    } else {
      left = mid + 1;
    }
  }
  return right;
}
search([5, 7, 7, 8, 8, 10], 8);
