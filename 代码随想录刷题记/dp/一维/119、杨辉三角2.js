// 优化，o(rowIndex) 空间复杂度
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  cur = 1
  let pre = [1, 1];
  let cur = 1;
  while (cur !== rowIndex) {
    cur++;
    // 1开头
    const now = [1];
    for (let i = 1; i < cur; i++) {
      now.push(pre[i - 1] + pre[i]);
    }
    // 1结尾
    now.push(1);
    // 更新pre
    pre = [...now];
  }
  return pre;
};
