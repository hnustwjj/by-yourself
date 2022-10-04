//题意是，给你n个骰子，从小到大输出它能组成的每个点数的对应概率

var dicesProbability = function(n) {
  // dp[i][j]标识投了i次时点数为j的次数
  const dp = new Array(n+1).fill(0).map(()=>new Array(6*n+1).fill(0))
  // 第一次时，1-6点出现的次数为1
  for(let i = 1 ; i <= 6 ; i++){
      dp[1][i] = 1
  }

  // 便利2-n的骰子
  for(let i = 2 ; i <= n ; i++){
      // 第二次能组成的点数是[2,12]
      // 第三次能组成的点数是[3,18]
      for(let j = i ; j <= 6*i ; j++){
          // 第i次能抛出1-6的点数
          for(let k = 1 ; k <= 6 ; k++){
              // 所以第i次拼出j的次数，是第i-1次拼出j-k的次数的和
              if(j-k>0) dp[i][j] += dp[i-1][j-k]
          }
      }
  }
  const res = []
  const p = 6 ** n
  // 次数 / 总次数 = 概率
  for(let i = n ; i <= 6*n ; i++){
      res.push(dp[n][i] / p)
  }
  return res
};