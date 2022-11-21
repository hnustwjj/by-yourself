/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
  const row = triangle.length
  if(row === 0) return 0
  for(let i = row-2 ; i >= 0 ; i--){
      for(let j = 0 ; j < triangle[i].length ; j++){
          let min = Math.min(triangle[i+1][j],triangle[i+1][j+1])
          triangle[i][j] += min
      }
  }
  return triangle[0][0]
};