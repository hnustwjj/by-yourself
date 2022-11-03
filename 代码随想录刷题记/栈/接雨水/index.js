// 积水只能在低洼处形成，当后面的柱子高度低于前面时，是无法接雨水的
// 所以使用单调栈（递减）存储可能储水的柱子，当找到一根比栈顶格子高的柱子时，开始接水

var trap = function (height) {
  // 用栈保存柱子的下标
  const stack = [];
  let res = 0;
  for (let i = 0; i < height.length; i++) {
    // 栈不为空，并且当前高度大于栈顶元素对应下标的高度
    // 等于的位置可能会和后面形成积水，不能弹出栈
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const mid = stack.pop();
      // 为空说明栈只有一个，无法形成积水，退出
      if (stack.length === 0) break;
      // 栈顶的下标
      const left = stack[stack.length - 1];
      // 宽度
      const w = i - left - 1;
      // 高度是两个柱子中较小的减去当前格子的高度
      const h = Math.min(height[left], height[i]) - height[mid];
      res += w * h;
    }
    stack.push(i);
  }
  return res;
};
