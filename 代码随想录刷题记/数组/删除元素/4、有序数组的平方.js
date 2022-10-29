// 要求on，那么就可以用双指针，因为最大值只可能从数组的左侧和右侧出现
var sortedSquares = function (nums) {
  const res = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let k = right;
  while (left <= right) {
    const l = nums[left] ** 2;
    const r = nums[right] ** 2;
    if (l < r) {
      res[k--] = r;
      right--;
    } else {
      res[k--] = l;
      left++;
    }
  }
  return res;
};
