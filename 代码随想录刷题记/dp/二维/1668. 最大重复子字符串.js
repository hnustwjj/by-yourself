/**
给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。
单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。
给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。

输入：sequence = "ababc", word = "ab"
输出：2
解释："abab" 是 "ababc" 的子字符串。

输入：sequence = "ababc", word = "ba"
输出：1
解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。

输入：sequence = "ababc", word = "ac"
输出：0
解释："ac" 不是 "ababc" 的子字符串。
 */

// 求最值，可以考虑到用dp
var maxRepeating = function (sequence, word) {
  let res = 0;
  // dp[i]标表示前i个以word结尾的最大k数
  const dp = new Array(sequence.length).fill(0);
  for (let i = 0; i <= sequence.length - word.length; i++) {
    if (sequence[i] === word[0]) {
      let idx1 = i;
      let idx2 = 0;
      while (idx2 < word.length && sequence[idx1] === word[idx2]) {
        idx1++;
        idx2++;
      }
      // 如果结尾的串是word，那么就在这个子串的位置更新dp
      // dp[i]，和dp[idx1] 之间差的就是word.length，也就是说如果idx1位置是以word结尾的，那么就找到前一个以word结尾的dp+1即可
      if (idx2 === word.length) {
        dp[idx1] = dp[i] + 1;
        res = Math.max(dp[idx1], res);
      }
    }
  }
  return res;
};
