/**
 * 记录四个边界，l,r,t,b，每次push完更新边界并进行判断即可
 */
 var spiralOrder = function(matrix) {
  const res = []
  let l = 0
  let r = matrix[0].length - 1
  let t = 0
  let b = matrix.length - 1
  while(true){
      // 遍历最上层
      for(let i = l ; i <= r ; i++) res.push(matrix[t][i])
      if(++t > b) break
      
      // 遍历最右层
      for(let i = t ; i <= b ; i++) res.push(matrix[i][r])
      if(--r < l) break

      for(let i = r ; i >= l ; i--) res.push(matrix[b][i])
      if(--b < t) break

      for(let i = b ; i >= t ; i--) res.push(matrix[i][l])
      if(++l > r) break
  }
  return res
};