/**
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

 

示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 */

var exchange = function (nums) {
  let left = -1;
  let right = nums.length;
  let index = 0;
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  while (index < right) {
    // 奇数，放左边
    if (nums[index] % 2 === 1) {
      swap(nums, ++left, index++);
    } else {
      // 偶数放右边，但是不能确定缓过来的数是技术或偶数，所以index不加
      swap(nums, --right, index);
    }
  }
  return nums;
};
