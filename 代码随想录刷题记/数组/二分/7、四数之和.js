/**

 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let j = 0; j < nums.length - 3; j++) {
    // 干脆不剪枝了= =、
    // 去重1：j>0很重要，这会让第一次不执行去重操作
    if (j > 0 && nums[j] === nums[j - 1]) continue;
    for (let i = j + 1; i < nums.length - 2; i++) {
      // 去重2: i>j+1很重要
      if (i > j + 1 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[left] + nums[right] + nums[i] + nums[j];
        // 如果小于，left++
        if (sum < target) left++;
        else if (sum > target) right--;
        else {
          // 去重3:答案去重
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          res.push([nums[j], nums[i], nums[left], nums[right]]);
          left++;
          right--;
        }
      }
    }
  }
  return res;
};
