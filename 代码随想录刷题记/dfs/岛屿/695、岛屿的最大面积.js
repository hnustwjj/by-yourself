/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let res = 0;
  const row = grid.length;
  const column = grid[0].length;
  // 如何求一个岛屿的面积？当然是当前的面积加上四周的面积！
  // 利用好递归的语意
  function dfs(i, j) {
    if (i >= 0 && i < row && j >= 0 && j < column && grid[i][j] === 1) {
      let area = 1;
      grid[i][j] = 0;
      area += dfs(i + 1, j);
      area += dfs(i, j + 1);
      area += dfs(i, j - 1);
      area += dfs(i - 1, j);
      return area;
    } else {
      return 0;
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, dfs(i, j));
      }
    }
  }
  return res;
};
