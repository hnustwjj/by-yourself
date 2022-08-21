// R只能往右...，‘.'代表空地，’O'代表终点
// 判断有几个点可以到终点

// const matrix = [
//   [".", ".", ".", ".", "."],
//   [".", "R", "R", "D", "."],
//   [".", "U", ".", "D", "R"],
//   [".", "U", "L", "L", "."],
//   [".", ".", ".", ".", "O"],
// ]
// 15个点

const matrix = [
  [".", ".", "."],
  [".", "O", "."],
  [".", ".", "."],
]
// 9个点

// 0个点
// const matrix = [[".", ".", ".", "L", "O"]]
const a = matrix.length
const b = matrix[0].length
const flags = new Array(a).fill(0).map(i => new Array(b).fill(2))

const endx = 1
const endy = 1

let res = 0
function dfs(i, j) {
  if (i >= 0 && i < a && j >= 0 && j < b) {
    if (flags[i][j] === 2) {
      if (matrix[i][j] === "O") {
        res++
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
        flags[i][j] = 1
        return 1
      }
      if (matrix[i][j] === ".") {
        let d = 0
        d += dfs(i - 1, j)
        d += dfs(i + 1, j)
        d += dfs(i, j - 1)
        d += dfs(i, j + 1)
        if (d === 0) {
          flags[i][j] = 0
          return 0
        } else {
          res++
          flags[i][j] = 1
          return 1
        }
      } else {
        let d = 0
        if (matrix[i][j] === "U") d += dfs(i - 1, j)
        if (matrix[i][j] === "R") d += dfs(i, j + 1)
        if (matrix[i][j] === "D") d += dfs(i + 1, j)
        if (matrix[i][j] === "L") d += dfs(i, j - 1)
        if (!d) {
          flags[i][j] = 0
          return 0
        } else {
          res++
          flags[i][j] = 1
          return 1
        }
      }
    } else {
      return flags[i][j]
    }
  } else {
    return 0
  }
}
dfs(endx, endy)
console.log(a * b - res)
