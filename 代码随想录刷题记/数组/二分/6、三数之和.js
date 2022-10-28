/**

 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // 剪枝 
    if (nums[i] > 0) break;
    // 去重1:如果当前的位是和前面一样的，就不做计算了
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    const target = 0 - nums[i];
    while (left < right) {
      const sum = nums[left] + nums[right];
      // 如果小于，left++
      if (sum < target) left++;
      else if (sum > target) right--;
      else {
        // 去重2:答案去重
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
