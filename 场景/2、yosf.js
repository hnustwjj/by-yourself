function yosf(arr, num = 3, current = 0) {
  if (arr.length === 1) return arr
  const index = (current + num - 1) % arr.length
  arr.splice(index, 1)
  if (index === arr.length) {
    // 如果是最后一个滚蛋了，那么下一个报数的就是第一个
    return yosf(arr, num, 0)
  } else {
    return yosf(arr, num, index)
  }
}

let allplayer = []
for (let i = 0; i < 30; i++) {
  allplayer[i] = i + 1
}


// https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-by-lee/
// n个人中，数到m出局的下标
var lastRemaining = function (n, m) {
  // 如果只剩一个人，那么出局下标就为0
  if (n === 1) {
    return 0
  }
  // 否则就是上一个n-1个人里数到m出局的人+m对应的下标
  return (lastRemaining(n - 1, m) + m) % n
}

var lastRemaining = function(n, m) {
  // 第一个数m入队的人的下标是0
  let ans = 0;
  // 那么第二个数m入队的人的下标是，第一个人的下标+m再对当前的人数取模，因为不能超出人数总和呀
  for(let i = 2;i <= n;i++) ans = (ans+m)%i;
  return ans;
};
console.log(yosf(allplayer, 3))
