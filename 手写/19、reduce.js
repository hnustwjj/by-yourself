Array.prototype.reduce = function (cb, init = 0) {
  let pre = init;
  console.log("1");
  const arr = this;
  arr.forEach((item, index) => {
    const res = cb(pre, item, index);
    pre = res;
  });
  return pre;
};

console.log([1, 2, 3].reduce((p, n) => p + n, 10));
