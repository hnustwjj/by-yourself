/**
 给你一个大小为 m x n 的矩阵 board 表示甲板，其中，每个单元格可以是一艘战舰 'X' 或者是一个空位 '.' ，返回在甲板 board 上放置的 战舰 的数量。

  战舰 只能水平或者垂直放置在 board 上。换句话说，战舰只能按 1 x k（1 行，k 列）或 k x 1（k 行，1 列）的形状建造
  其中 k 可以是任意大小。

  题目保证，两艘战舰之间至少有一个水平或垂直的空位分隔 （即没有相邻的战舰）。

  其实就是跟岛屿数量一样，清空岛屿，增加res
  但是这里清空岛屿的逻辑跟原来不一样，这里只需要向下或者向右清空
  而原来需要向四周清空，因为可能是蜿蜒的那种
 */
var countBattleships = function (board) {
  const row = board.length;
  const column = board[0].length;
  function clear(i, j) {
    if (board[i][j] === "X") {
      // 清空岛屿
      board[i][j] = ".";
      if (i + 1 < row && board[i + 1][j] === "X") clear(i + 1, j);
      if (j + 1 < column && board[i][j + 1] === "X") clear(i, j + 1);
    }
  }
  let res = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] === "X") {
        res++;
        clear(i, j);
      }
    }
  }
  return res;
};
