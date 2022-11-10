/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cur = 0; // cur指针指向当前要赋值的位置
  let rep = 0; // rep指针指向当前遍历的位置
  let count = 0; //代表当前数出现了几次
  let currentNum = nums[0]; //代表当前数
  while (rep < nums.length) {
    if (currentNum === nums[rep]) {
      count++;
      if (count <= 2) {
        nums[cur++] = nums[rep++];
      } else {
        while (nums[rep] === currentNum && rep < nums.length) {
          rep++;
        }
        if(rep === nums.length) break
        count = 1;
        currentNum = nums[rep];
        nums[cur++] = nums[rep++];
      }
    } else {
      currentNum = nums[rep];
      nums[cur++] = nums[rep++];
      count = 1;
    }
  }
  return cur;
};
console.log(removeDuplicates([1, 1, 1]));
