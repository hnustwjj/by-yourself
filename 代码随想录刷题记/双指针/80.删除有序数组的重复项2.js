/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cur = 0;
  let rep = 0;
  let count = 0;
  let currentNum = nums[0];
  while (rep < nums.length) {
    console.log(cur, rep, currentNum);
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
