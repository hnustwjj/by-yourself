/**
 * 暴力枚举，repeat:O(n)，所以时间复杂度是O(n^2)
 */
var repeatedSubstringPattern = function (s) {
  for (let split = 1; split <= ~~(s.length / 2); split++) {
    const count = s.length / split;
    const str = s.slice(0, split).repeat(count);
    if (str === s) return true;
  }
  return false;
};
