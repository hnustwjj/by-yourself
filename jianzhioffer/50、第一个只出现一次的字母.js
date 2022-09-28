/**
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:

输入：s = "abaccdeff"
输出：'b'
示例 2:

输入：s = "" 
输出：' '
*/

// 像字母这种东西，就可以用一个map去存
var firstUniqChar = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ?? 0;
    map[s[i]]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return s[i];
  }
  return " ";
};
