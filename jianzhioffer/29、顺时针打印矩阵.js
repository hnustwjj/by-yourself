/**
 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

 

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

 */

// 很重要，粗暴一点，每次while都判断res的length是否符合要求
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  // 设置每次遍历的四个角落
  let startrow = 0;
  let startcolumn = 0;
  let endrow = matrix.length - 1;
  let endcolumn = matrix[0].length - 1;
  // 遍历的i和j
  let i = startrow;
  let j = startcolumn;
  // 保存的res
  let res = [];
  // res最终要达到的长度
  let alllen = matrix[0].length * matrix.length;
  while (
    startrow <= endrow &&
    startcolumn <= endcolumn &&
    res.length < alllen
  ) {
    while (j < endcolumn && res.length < alllen) {
      res.push(matrix[i][j++]);
    }
    while (i < endrow && res.length < alllen) {
      res.push(matrix[i++][j]);
    }
    while (j > startcolumn && res.length < alllen) {
      res.push(matrix[i][j--]);
    }
    while (i > startrow && res.length < alllen) {
      res.push(matrix[i--][j]);
    }
    startrow++;
    startcolumn++;
    endrow--;
    endcolumn--;
    i = startrow;
    j = startcolumn;
  }

  // 特殊情况
  /**
   * [1,2,3]
   * [4,5,6]
   * [7,8,9]
   */
  if (res.length !== alllen) {
    res.push(matrix[--i][--j]);
  }
  return res;
};
