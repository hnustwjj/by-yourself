/**
   https://leetcode.cn/problems/generate-parentheses/
 */
 var generateParenthesis = function(n) {
  const res = []
  // dfs遍历所有情况
  // 注意剪枝
  // left,right用于保存左括号和右括号的个数
  function dfs(str = '',left = 0,right = 0){
      if(right > left) return
      if(left > n || right > n) return
      if(left === n && right === n) {
          res.push(str)
          return
      }
      dfs(str + '(',left+1,right)
      dfs(str + ')',left,right+1)
  }
  dfs()
  return res
};