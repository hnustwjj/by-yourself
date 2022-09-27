var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let res = 0;
  while (right < s.length) {
    // 如果存在重复的，就压缩左侧
    if (set.has(s[right])) {
      set.delete(s[left++]);
    } else {
      // 否则就扩充右侧，并且更新答案
      set.add(s[right++]);
      res = Math.max(res, set.size);
    }
  }
  return Math.max(res, set.size);
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("aabaab!bb")); //3
console.log(lengthOfLongestSubstring(" ")); //1
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
