/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
// 最短路用bfs，因为每次出队的时候，遍历的点的setp都是一样的，那么当符合条件的时候，一定就是最短的，不需要去存最小值。
var nearestExit = function (maze, entrance) {
  // 压入起点，setp为0
  const walkableArr = [[...entrance, 0]];
  const pos = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];
  
  while (walkableArr.length) {
    let [row, col, step] = walkableArr.shift();
    // 设置当前点为+，标识已经压入过
    maze[row][col] = "+";
    // 遍历四个方向
    for (let i = 0; i < pos.length; i++) {
      const { x, y } = pos[i];
      const nextX = row + x;
      const nextY = col + y;
      // 只有当对应的方向的值符合要求，才压入队列
      if (
        nextX >= 0 &&
        nextX < maze.length &&
        nextY >= 0 &&
        nextY <= maze[0].length &&
        maze[nextX][nextY] === "."
      ) {
        // 压入之前进行判断
        if (
          nextX === 0 ||
          nextX === maze.length - 1 ||
          nextY === 0 ||
          nextY === maze[nextX].length - 1
        )
          return step + 1;

        // 压入之后，要赋值为+，表明已经走过这条路
        maze[nextX][nextY] = "+";
        walkableArr.push([nextX, nextY, step + 1]);
      }
    }
  }
  return -1;
};

/**
 * 不知道我这个dfs写的有啥问题，最后几个用力过不了。。。
 * 好像是记录的并不是min
 */
var nearestExit = function (maze, entrance) {
  const row = maze.length;
  const column = maze[0].length;
  const arrow = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];
  let res = Infinity
  function dfs(i, j, len = 0) {
    let min = Infinity;
    maze[i][j] = "+";
    for (let k = 0; k < arrow.length; k++) {
      const { x, y } = arrow[k];
      const nextX = x + i;
      const nextY = y + j;
      if (
        nextX >= 0 &&
        nextX <= row - 1 &&
        nextY >= 0 &&
        nextY <= column - 1 &&
        maze[nextX][nextY] === "."
      ) {
        if (
          nextX == 0 ||
          nextY === 0 ||
          nextX === row - 1 ||
          nextY === column - 1
        ){
          res = Math.min(res,len+1)
        }
          
        maze[nextX][nextY] = "+";
        min = Math.min(min, dfs(nextX, nextY, len + 1));
      }
    }
    return min;
  }
  dfs(...entrance);
  return res === Infinity ? -1 : res;
};

console.log(
  nearestExit(
    [
      ["+", ".", "+", "+", "+", "+", "+"],
      ["+", ".", "+", ".", ".", ".", "+"],
      ["+", ".", "+", ".", "+", ".", "+"],
      ["+", ".", ".", ".", "+", ".", "+"],
      ["+", "+", "+", "+", "+", ".", "+"],
    ],
    [0, 1]
  )
);
