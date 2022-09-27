/**

 */

var maxValue = function (grid) {
  const row = grid.length;
  const column = grid[0].length;
  const dp = new Array(row + 1)
    .fill(0)
    .map(() => new Array(column + 1).fill(0));
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }
  return dp[row][column];
};
