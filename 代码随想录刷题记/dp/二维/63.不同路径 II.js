/**
    63. 不同路径 II
    一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
    现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
    网格中的障碍物和空位置分别用 1 和 0 来表示。
 */

/**
    定义：
      定义dp[i][j]的寓意是, 走到dp[i][j]的路径总数
    
    初始化：
      dp[i][0] = 1 ｜ 0 
      dp[0][j] = 1 ｜ 0
      为0是，当遇到block时不继续赋值为1
      为1是，最上面和最左侧的这一排只能有一种方式
     
    遍历：
      二维遍历的时候，更新dp[i][j]
      当i，j可到达时进行dp的更新
        如果i-1，j可到达，就加上dp[i-1][j]
        如果i，j-1可到达，就加上dp[i][j-1]

 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length
  const m = obstacleGrid[0].length
  // 如果起点和终点为0，那么就无法到达
  if(obstacleGrid[n-1][m-1] === 1) return 0
  if(obstacleGrid[0][0] === 1) return 0
  // 初始化
  const dp = new Array(n).fill(0).map(()=>new Array(m).fill(0))

  // 如果堵住了，就无法到达
  for(let i = 0 ; i < n ; i++) {
      if(obstacleGrid[i][0] === 1) break
      dp[i][0] = 1
  }
  for(let i = 0 ; i < m ; i++) {
      if(obstacleGrid[0][i] === 1) break
      dp[0][i] = 1
  }

  // 遍历
  for(let i = 1 ; i < n ; i++){
    for(let j = 1 ; j < m ; j++){
      // 只有当前路可到达的时候才去计算
      if(!obstacleGrid[i][j]){
        if(!obstacleGrid[i-1][j]) dp[i][j] += dp[i-1][j]
        if(!obstacleGrid[i][j-1]) dp[i][j] += dp[i][j-1]
      }
    }
  }
  return  dp[n-1][m-1]
};

uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])