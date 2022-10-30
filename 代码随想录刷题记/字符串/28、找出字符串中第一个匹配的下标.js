/**
 纯种暴力，没啥说法= =、
 */
var strStr = function (haystack, needle) {
  let len1 = haystack.length;
  let len2 = needle.length;
  const range = len1 - len2;
  let idx = 0;
  while (idx <= range) {
    if (haystack[idx] !== needle[0]) {
      idx++;
    } else {
      let idx2 = 0;
      const start = idx;
      let temp = idx;
      while (idx2 < needle.length && needle[idx2] === haystack[temp]) {
        idx2++;
        temp++;
      }
      if (idx2 === needle.length) {
        return start;
      } else {
        idx++;
      }
    }
  }
  return -1;
};
