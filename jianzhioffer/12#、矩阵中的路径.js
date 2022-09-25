/**
  剑指 Offer 12. 矩阵中的路径
  给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

  单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

  例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）
  示例 1：

  输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
  输出：true
  示例 2：

  输入：board = [["a","b"],["c","d"]], word = "abcd"
  输出：false
 */

// 回溯
var exist = function (board, word) {
  const row = board.length;
  const column = board[0].length;
  // 记录是否被访问过
  const arr = new Array(row).fill(0).map(() => new Array(column).fill(0));

  // 保存开始位置
  const startArr = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] === word[0]) startArr.push([i, j]);
    }
  }
  // 对所有开始位置进行一个搜索
  for (let i = 0; i < startArr.length; i++) {
    const [start, end] = startArr[i];
    dfs(start, end, word);
  }
  let flag = false;
  function dfs(x, y, path) {
    // 如果当前结点被访问过了，返回
    if (arr[x][y] === 1) return;
    // 如果当前结点是path的第一个
    if (board[x][y] === path[0]) {
      // 设置当前结点访问过
      arr[x][y] = 1;
      // 取出剩余的path
      const rest = path.slice(1);
      if (rest.length === 0) {
        flag = true;
        return;
      }

      // 向四周访问
      if (x > 0) dfs(x - 1, y, rest);
      if (y < column - 1) dfs(x, y + 1, rest);
      if (y > 0) dfs(x, y - 1, rest);
      if (x < row - 1) dfs(x + 1, y, rest);
      // 回溯
      arr[x][y] = 0;
    }
  }

  return flag;
};
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
