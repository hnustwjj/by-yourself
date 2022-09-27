/**
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 */

// 简单dfs
var translateNum = function (num) {
  const arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let str = num + "";
  const res = [];
  function dfs(str, cache = "") {
    if (str.length === 0) {
      res.push(cache);
      return;
    }
    let num = +str[0];
    dfs(str.slice(1), cache + arr[num]);

    // 防止出现506输出2的情况
    if (num !== 0) {
      num = num * 10 + +str[1];
      if (num <= 25) {
        dfs(str.slice(2), cache + arr[num]);
      }
    }
  }
  dfs(str);
  return res.length;
};
