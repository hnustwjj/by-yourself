// https://leetcode.cn/problems/rotate-image/

/* 
输入：[
        [5,1,9,11],
        [2,4,8,10],
        [13,3,6,7],
        [15,14,12,16]
      ]
输出：[
        [15,13,2,5],
        [14,3,4,1],
        [12,6,8,9],
        [16,7,10,11]
      ] 
*/

var rotate = function (matrix) {
  let len = matrix.length
  // while (len > 0) {
  let start = matrix.length - len
  const cache = new Array(len)
  //保存cache
  for (let i = 0; i < len; i++) {
    cache[i] = matrix[start][start + i]
  }
  console.log(cache)
  // 和start + len - 1列的每一项一一对应
  for (let i = 0; i < len; i++) {
    let temp = cache[i]
    cache[i] = matrix[start + i][start + len - 1]
    matrix[start + i][start + len - 1] = temp
  }
  // 和start + len - 1行的每一项反着对应
  for (let i = len - 1; i >= 0; i--) {
    let temp = cache[i]
    console.log(temp,matrix[start + len - 1][start + (len - 1 - i)])
    cache[i] = matrix[start + len - 1][start + (len - 1 - i)]
    matrix[start + len - 1][start + (len - 1 - i)] = temp
  }
  console.log(cache)
  for (let i = len - 1; i >= 0; i--) {
    let temp = cache[i]
    cache[i] = matrix[start + i][start]
    matrix[start + i][start] = temp
  }
  console.log(cache)
  for (let i = len - 1; i >= 0; i--) {
    let temp = cache[i]
    cache[i] = matrix[start][start + len - i - 1]
    matrix[start][start + len - i - 1] = temp
  }

  console.log(cache)
  // }
}
rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
])
