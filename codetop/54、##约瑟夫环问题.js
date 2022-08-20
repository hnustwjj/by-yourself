// https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

var lastRemaining = function (n, m) {
  if (n === 1) {
    return 0
  }
  return (lastRemaining(n - 1, m) + m) % n
}
