/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let res = 0;
  const que = [];
  let count = 0;
  const row = grid.length;
  const column = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 2) {
        que.push([i, j]);
      }
      if (grid[i][j] === 1) count++;
    }
  }
  if (count === 0) return 0;

  // PUSH的时候让count--，并且让橘子变烂
  function resolve(i, j) {
    count--;
    grid[i][j] = 2;
    que.push([i, j]);
  }
  // 如果都是懒橘子了，就不要继续进行循环了
  while (que.length && count) {
    let len = que.length;
    while (len) {
      const [i, j] = que.shift();
      if (i + 1 < row && grid[i + 1][j] === 1) resolve(i + 1, j);
      if (i > 0 && grid[i - 1][j] === 1) resolve(i - 1, j);
      if (j + 1 < column && grid[i][j + 1] === 1) resolve(i, j + 1);
      if (j > 0 && grid[i][j - 1] === 1) resolve(i, j - 1);
      len--;
    }
    res++;
  }
  return count === 0 ? res : -1;
};
