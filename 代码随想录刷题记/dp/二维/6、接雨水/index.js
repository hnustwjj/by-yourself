// 暴力的思路：每列能接的雨水多高度，就是从当前位置开始向左右找出高度的最大值，然后这两者的较小的那个 - 当前格子的高度

// 所以我们提前保存左右的最大值
// 保存从左到右的最大值，再保存从右到左的最大值，然后进行答案的累加
var trap = function (height) {
  const n = height.length;
  const leftMax = new Array(n).fill(0);
  const rightMax = [...leftMax];
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, height[i]);
    leftMax[i] = max;
  }
  max = 0;
  for (let i = n - 1; i >= 0; i--) {
    max = Math.max(max, height[i]);
    rightMax[i] = max;
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    // 高度中较小的那个，减去当前柱子的高度
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
};
