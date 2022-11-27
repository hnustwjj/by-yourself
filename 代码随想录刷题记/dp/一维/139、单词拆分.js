var wordBreak = function(s, wordDict) {
  const n = s.length;
  const set = new Set(wordDict);
  const dp = new Array(n + 1).fill(false);
  
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
      // 判断如果dp[j]是可以组成的，并且set里面存在[j,i]，就标记当前i是可以组成的
      for (let j = 0; j < i; j++) {
          if (dp[j] && set.has(s.substr(j, i - j))) {
              dp[i] = true;
              break;
          }
      }
  }
  return dp[n];
};