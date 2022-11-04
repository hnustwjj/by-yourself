/**
    定义：
      定义dp[i][j]的寓意是，word1的[0,i-1]的字符串和word2的[0,j-1]字符串的最长公共子序列的长度
    
    初始化：
    dp[0][0] = 0
      dp[i][0] = 0
      dp[0][j] = 0，因为长度为0的时候没有公共子序列
     
    遍历：
      二维遍历的时候，看当前的字符s1和s2是否一样
      s1 === s2，那么就是dp[i-1][j-1]的最长公共子序列的长度加上当前的长度（1）
      s1 !== s2，那么就是dp[i-1][j]和dp[i][j-1]中较大的那个数
 */
 var minDistance = function(word1, word2) {
  const n = word1.length
  const m = word2.length
  const dp = new Array(n+1).fill(0).map(()=>new Array(m+1).fill(0))
  for(let i = 1 ; i <= n ; i++){
      const s1 = word1[i-1]
      for(let j = 1 ; j <= m ; j++){
          const s2 = word2[j-1]
          if(s1 === s2){
              dp[i][j] = dp[i-1][j-1] + 1
          }else{
              dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
          }
      }
  }
  return  dp[n][m] 
};