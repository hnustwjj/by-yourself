/**
给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

如果可以，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。

 

示例 1：

输入：ransomNote = "a", magazine = "b"
输出：false
示例 2：

输入：ransomNote = "aa", magazine = "ab"
输出：false
示例 3：

输入：ransomNote = "aa", magazine = "aab"
输出：true

  没啥好说的，就是统计，判断
*/
var canConstruct = function (ransomNote, magazine) {
  const map1 = {};
  const map2 = {};
  for (let i = 0; i < ransomNote.length; i++) {
    map1[ransomNote[i]] = map1[ransomNote[i]] ?? 0;
    map1[ransomNote[i]]++;
  }
  for (let j = 0; j < magazine.length; j++) {
    map2[magazine[j]] = map2[magazine[j]] ?? 0;
    map2[magazine[j]]++;
  }
  const keys = Object.keys(map1);
  for (const key of keys) {
    const map2Value = map2[key] ?? 0;
    if (map1[key] > map2Value) return false;
  }
  return true;
};

// 字母相关的hash可以用数组代替
var canConstruct = function (a, b) {
  const hash = new Array(26).fill(0);
  const aCode = "a".charCodeAt();
  for (let i = 0; i < b.length; i++) {
    const v = b[i].charCodeAt() - aCode;
    hash[v]++;
  }
  for (let i = 0; i < a.length; i++) {
    const v = a[i].charCodeAt() - aCode;
    hash[v]--;
    if (hash[v] < 0) return false;
  }
  return true;
};
