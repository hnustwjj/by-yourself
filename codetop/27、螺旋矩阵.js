var spiralOrder = function (matrix) {
  const ans = []
  if (matrix.length === 0) return ans //若数组为空，直接返回答案
  let u = 0 //赋值上下左右边界
  let d = matrix.length - 1
  let l = 0
  let r = matrix[0].length - 1
  while (true) {
    for (let i = l; i <= r; ++i) ans.push(matrix[u][i]) //向右移动直到最右
    if (++u > d) break //重新设定上边界，若上边界大于下边界，则遍历遍历完成，下同
    for (let i = u; i <= d; ++i) ans.push(matrix[i][r]) //向下
    if (l > --r) break //重新设定有边界
    for (let i = r; i >= l; --i) ans.push(matrix[d][i]) //向左
    if (u > --d) break //重新设定下边界
    for (let i = d; i >= u; --i) ans.push(matrix[i][l]) //向上
    if (++l > r) break //重新设定左边界
  }
  return ans
}

console.log(spiralOrder([[6, 9, 7]]))
