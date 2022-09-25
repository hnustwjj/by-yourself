/**
  提示：
  输入必须是长度为 32 的 二进制串 。
 */

var hammingWeight = function (n) {
  let ans = 0;
  // 右移，与1
  for (let i = 0; i < 32; i++) {
    ans += (n >> i) & 1;
  }
  return ans;
};
