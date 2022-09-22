var lengthOfLongestSubstring = function(s) {
  let left = 0
  let right = 0
  let max = 0
  while(right < s.length){
      let i = right - 1
      // 从后往前找相同的元素
      for(; i >= left ; i--){
        if(s[i] === s[right]){
          break;
        }
      }
      // 如果有相同的，更新max和left
      if(i !== left - 1){
        max = Math.max(right-left,max)
        left = i + 1
      }
      right++
  }
  return Math.max(max,right-left)
};

console.log(lengthOfLongestSubstring("abcabcbb")) //3
console.log(lengthOfLongestSubstring("aabaab!bb")) //3
console.log(lengthOfLongestSubstring(" ")) //1
console.log(lengthOfLongestSubstring("bbbbb")) //1
console.log(lengthOfLongestSubstring("pwwkew")) //3