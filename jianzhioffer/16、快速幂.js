/**
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

 

示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25

 */

// 递归写法
var myPow = function (x, n) {
  function quickPow(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    const pow = myPow(x, ~~(n / 2));
    if (n % 2 === 1) return pow * pow * x;
    else return pow * pow;
  }

  if (n < 0) return 1 / quickPow(x, -n);
  else return quickPow(x, n);
};

// 迭代写法
var myPow = function (x, n) {
  let res = 1.0;
  let abn = n < 0 ? -n : n;
  while (abn > 0) {
    // 如果末尾是1，那么就
    //2^5 => 101 等于 2^4 * 2^1
    if (abn & 1) {
      res *= x;
    }
    x *= x;
    abn >>>= 1;
  }
  return n < 0 ? 1 / res : res;
};
console.log(myPow(2, 5));
