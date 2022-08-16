// https://leetcode.cn/problems/combination-sum-ii/
// 回溯+剪枝
var combinationSum2 = function (candidates, target) {
  const res = []
  candidates = candidates.sort((a, b) => a - b)
  const dfs = (sum = 0, index = 0, cache = []) => {
    if (sum > target) return
    if (sum === target) {
      res.push([...cache])
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) break
      // 剪枝
      // 当前循环，不进行重复操作（前面已经有过某个数，那么后面就不重复了）
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue
      }
      cache.push(candidates[i])
      dfs(sum + candidates[i], i + 1, cache)
      cache.pop(candidates[i])
    }
  }
  dfs()
  return res
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
