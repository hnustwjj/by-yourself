/**
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
 */

function getSum(x) {
  let sumx = 0;
  while (x) {
    sumx += x % 10;
    x = ~~(x / 10);
  }
  return sumx;
}

var movingCount = function (m, n, k) {
  // 记录当前是否走过
  const flags = new Array(m).fill(0).map(()=>new Array(n).fill(true))
  let res = 0;
  // dfs向下和向右走
  function dfs(x, y) {
    if (x === m || y === n) return;
    const sumx = getSum(x);
    const sumy = getSum(y);
    if (sumx + sumy <= k && flags[x][y]) {
      flags[x][y] = false
      res++;
      dfs(x + 1, y);
      dfs(x, y + 1);
    } else {
      return;
    }
  }
  dfs(0, 0);
  return res;
};

console.log(movingCount(3,2,17))