// 有了之前的思路，删除数组用双指针，吧0删除，然后最后再复写0
var moveZeroes = function (nums) {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] === 0) {
      fast++;
    } else {
      nums[slow++] = nums[fast++];
    }
  }
  while (slow < nums.length) {
    nums[slow++] = 0;
  }
};
