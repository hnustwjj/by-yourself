/**
  题目没有要求不改变顺序，所以就直接简单粗暴
 */
var removeElement = function (nums, val) {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      swap(nums, i, nums.length - 1);
      i--;
      nums.pop();
    }
  }
  return nums.length;
};

// 双指针
// 解法：https://www.programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html#_27-%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0
var removeElement = function (nums, val) {
  let slow = 0
  let fast = 0
  // 用双指针进行便利，如果fast指针的值等于val，就往后退
  while(fast < nums.length){
    if(nums[fast] === val){
      fast++
    }else{
      // 否则就赋值，并且一起后退
      nums[slow++] = nums[fast++]
    }
  }
  return slow
};
