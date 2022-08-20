var nextPermutation = function (nums) {
  const find = +nums.join("")
  nums = nums.sort((a, b) => a - b)
  let res = []
  function dfs(index = 0) {
    if (index === nums.length) {
      res.push(parseInt(nums.join("")))
      return
    }
    for (let i = index; i < nums.length; i++) {
      ;[nums[index], nums[i]] = [nums[i], nums[index]]
      dfs(index + 1)
      ;[nums[index], nums[i]] = [nums[i], nums[index]]
    }
  }
  dfs()
  res = res.sort((a, b) => a - b)
  let index = 0
  while (res[index] <= find) {
    index++
  }
  return (res[index] + "").split("").map(item => +item)
}

console.log(nextPermutation([1, 2, 3]))
