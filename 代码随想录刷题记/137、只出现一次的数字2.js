/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  // 32位
  for (let i = 0; i < 32; ++i) {
    let total = 0;
    // 统计所有nums的第i位的个数
    for (const num of nums) {
      total += (num >> i) & 1;
    }
    // 模3如果为1，说明当要找的那个数在当前位有有值
    if (total % 3 === 1) {
      ans |= 1 << i;
    }
  }
  return ans;
};
