/**
  快速幂
*/
var myPow = function (x, n) {
  function p(x, n) {
    if (n === 1) return x;
    if (n === 0) return 1;
    const res = p(x, ~~(n / 2));
    if (n % 2 === 1) {
      return res * res * x;
    } else {
      return res * res;
    }
  }
  if (n < 0) return p(1 / x, -n);
  else return p(x, n);
};
