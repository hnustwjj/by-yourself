/**
 62. 不同路径
  一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
  机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
  问总共有多少条不同的路径？
 */

// 


/**
    定义：
      定义dp[i][j]的寓意是, 走到dp[i][j]的路径总数
    
    初始化：
      dp[i][0] = 1
      dp[0][j] = 1，因为最上面和最左侧的这一排只能有一种方式
     
    遍历：
      二维遍历的时候，更新dp[i][j]
      因为只能往下和往右，所以当前只能从上面和左边来
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(()=>new Array(n).fill(0))
  for(let i = 0 ; i < m ; i++) dp[i][0] = 1
  for(let i = 0 ; i < n ; i++) dp[0][i] = 1
  for(let i = 1 ; i< m ; i++){
    for(let j = 1 ; j < n ; j++){
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m-1][n-1]
};

var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(()=>new Array(n).fill(1))
  for(let i = 1 ; i< m ; i++){
    for(let j = 1 ; j < n ; j++){
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m-1][n-1]
};

uniquePaths(3,7)