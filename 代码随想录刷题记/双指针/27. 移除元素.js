/**
  使用双指针去进行val的移动和删除，最后正常的数组长度就是slow
 */
var removeElement = function (nums, val) {
  let slow = 0;
  let fast = nums.length - 1;

  while (slow <= fast) {
    if (nums[slow] === val) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      fast--;
    } else {
      slow++;
    }
  }

  return slow;
};
