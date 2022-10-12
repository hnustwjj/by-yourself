var add = function (a, b) {
  while (b) {
    // 找到所有位上都有1的情况
    // 例如2 -> 10 ; 3 -> 11
    // a & b = 10，第1位为1，说明需要进位
    // a ^ b = 01，是除了进位之后剩下的内容
    const carry = a & b;
    a = a ^ b;
    // 将要进位的内容向左移动，重新进行异或相加
    b = carry << 1;
    console.log("a,b", a, b);
  }
  return a;
};

console.log(add(2, 3));
