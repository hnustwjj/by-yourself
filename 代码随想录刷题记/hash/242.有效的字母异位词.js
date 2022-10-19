/**
 题目说只有字母，一般遇到这种情况，可以用hash表进行计数
 */
 var isAnagram = function(s, t) {
  const arr = new Array(26).fill(0)
  for(let i = 0 ; i < s.length ; i++){
      arr[s[i].charCodeAt() - 'a'.charCodeAt()]++
  }
  for(let i = 0 ; i < t.length ; i++){
      arr[t[i].charCodeAt() - 'a'.charCodeAt()]--
  }
  return arr.every(i => i === 0)
};