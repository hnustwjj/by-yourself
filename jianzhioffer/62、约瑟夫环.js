var lastRemaining = function (n, m) {
  // 第一个数m入队的人的下标是0
  let ans = 0;
  // 那么第二个数m入队的人的下标是，第一个人的下标+m再对当前的人数取模，因为不能超出人数总和呀
  for (let i = 2; i <= n; i++) ans = (ans + m) % i;
  return ans;
};
