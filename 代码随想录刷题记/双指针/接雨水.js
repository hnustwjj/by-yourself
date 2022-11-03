var trap = function (height) {
  let res = 0;

  // 标记当前左右的位置
  let left = 0;
  let right = height.length - 1;

  // 标记左右目前为止的
  let leftMax = 0;
  let rightMax = 0;
  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    // 汇入小的那一方
    if (leftMax < rightMax) {
      res += leftMax - height[i];
      left++;
    } else {
      res += rightMax - height[i];
      right--;
    }
  }
  return res;
};
