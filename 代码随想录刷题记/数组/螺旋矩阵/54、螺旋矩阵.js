// 记录四个顶点，用for循环插入值
var spiralOrder = function (matrix) {
  const ans = [];
  let t = 0;
  let r = matrix[0].length - 1;
  let b = matrix.length - 1;
  let l = 0;

  // 虽然四个都是闭区间，但是其实是按照top一整行，其余都少一格去进行填充的
  while (true) {
    for (let i = l; i <= r; i++) ans.push(matrix[t][i]);
    // 最上面那层走完了，往下走，顺便判断（因为是闭区间）
    if (++t > b) break;

    for (let i = t; i <= b; i++) ans.push(matrix[i][r]);
    if (--r < l) break;

    for (let i = r; i >= l; i--) ans.push(matrix[b][i]);
    if (--b < t) break;

    for (let i = b; i >= t; i--) ans.push(matrix[i][l]);
    if (++l > r) return ans;
  }
  return ans;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
