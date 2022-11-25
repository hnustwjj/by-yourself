/**
 * 由题意可知，处在边缘的O是不会呗围绕的，那么相关联的O也不会被围绕
 * 那么我们可以从边缘找相关的O标记为A，代表不会被围绕的O
 */
var solve = function (board) {
  const n = board.length;
  const m = board[0].length;

  function dfs(i, j) {
    if (i < 0 || i >= n || j < 0 || j >= m || board[i][j] !== "O") {
      return;
    }
    board[i][j] = "A";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
  for (let i = 0; i < n; i++) {
    dfs(i, m - 1);
    dfs(i, 0);
  }
  for (let i = 1; i < m - 1; i++) {
    dfs(0, i);
    dfs(n - 1, i);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "A"){
        board[i][j] = "O";
      }
      else if (board[i][j] === "O"){
        board[i][j] = "X";
      }
    }
  }
};

const board = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
solve(board);
console.log(board);
