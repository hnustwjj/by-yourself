/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length;
  const column = board[0].length;
  // 标记数组
  const f = new Array(row).fill(0).map(() => new Array(column).fill(false));
  // 四个方向
  const arrow = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];
  let res = false;
  function dfs(i, j, index = 0) {
    if (word[index] !== board[i][j]) return;
    if (index === word.length - 1) {
      res = true;
      return;
    }
    arrow.forEach(({ x, y }) => {
      const nextX = i + x;
      const nextY = j + y;
      if (
        nextX >= 0 &&
        nextX < row &&
        nextY >= 0 &&
        nextY < column &&
        f[nextX][nextY] === false
      ) {
        // 标记当前位置被访问过
        f[i][j] = true;
        dfs(nextX, nextY, index + 1);
        f[i][j] = false;
      }
    });
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      dfs(i, j, 0);
    }
  }
  return res;
};

console.log(exist([["a", "a"]], "aaa"));
