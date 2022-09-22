// https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/

// res.length < column * row在每个循环里都要添加
// 最后一个判断是用于特殊情况处理的，3*3的矩阵没有加入最中间的元素（不知道为啥）
var spiralOrder = function (matrix) {
  let i = 0;
  let j = 0;
  let offset = 1;
  const row = matrix.length;
  if (row === 0 || !matrix[0]) return [];
  if (row === 1) return matrix[0];
  const column = matrix[0].length;
  const res = [];

  while (
    res.length < column * row &&
    i <= Math.floor(row / 2) &&
    j <= Math.floor(column / 2)
  ) {
    console.log(row * column);
    while (res.length < column * row && j < column - offset) {
      res.push(matrix[i][j++]);
    }
    while (res.length < column * row && i < row - offset) {
      res.push(matrix[i++][j]);
    }
    while (res.length < column * row && j >= offset) {
      res.push(matrix[i][j--]);
    }
    while (res.length < column * row && i >= offset) {
      res.push(matrix[i--][j]);
    }
    i++;
    j++;
    offset++;
  }
  if (res.length === row * column - 1) {
    res.push(matrix[--i][--j]);
  }
  return res;
};

const matrix = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]];
console.log(spiralOrder(matrix));

// 官方题解
//  先打印最上面的一整行,其余的都少打印一个
// 我的做法是,
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  const rows = matrix.length,
    columns = matrix[0].length;
  const order = [];
  let left = 0,
    right = columns - 1,
    top = 0,
    bottom = rows - 1;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      order.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      order.push(matrix[row][right]);
    }
    // 这个条件很重要
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        order.push(matrix[bottom][column]);
      }
      for (let row = bottom; row > top; row--) {
        order.push(matrix[row][left]);
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return order;
};
