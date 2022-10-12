var constructArr = function (a) {
  let cache = 1;
  const b = new Array(a.length).fill(1);
  // 保留从左到右除了当前位的乘积
  for (let i = 0; i < a.length; i++) {
    b[i] = cache;
    cache = cache * a[i];
  }
  cache = 1;
  // 因为b[i]已经记录了左侧的，现在只需要乘上右侧的cache即可
  for (let i = a.length - 1; i >= 0; i--) {
    b[i] = b[i] * cache;
    cache = cache * a[i];
  }
  return b;
};
