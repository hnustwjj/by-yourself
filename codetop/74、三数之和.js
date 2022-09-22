// https://leetcode.cn/problems/3sum/
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = new Set(); // 不会剪枝，直接用set去重
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        // 去重了一部分
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        res.add([nums[i], nums[left], nums[right]].toString());
        left++;
        right--;
        continue;
      }
      //小于零，说明left太小，往后移动
      sum < 0 ? left++ : right--;
    }
  }
  res = [...res];
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].split(",");
  }
  return res;
};
