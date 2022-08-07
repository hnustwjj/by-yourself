// https://leetcode.cn/problems/merge-intervals/

// 思路，先进行排序，然后维护一个cache区间，遍历到后面的区间intervals[i]时，与cache进行对比
// 1: interval是接着cache的，例如cache:[1,3] interval:[2,4]  （更新cache[1]拓宽cache）
// 2: interval在cache内部，例如cache:[1,4] interval:[2,3]  （不更新cache）
// 3: interval在cache外部，将cache保存起来
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  let res = []
  let cache = [...intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= cache[1]) {
      if (intervals[i][1] > cache[1]) {
        cache.pop()
        cache.push(intervals[i][1])
      }
    } else {
      res.push([...cache])
      cache = [...intervals[i]]
    }
  }
  cache.length && res.push(cache)
  return res
}
