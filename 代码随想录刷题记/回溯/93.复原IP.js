// https://leetcode.cn/problems/restore-ip-addresses/

//官方题解
var restoreIpAddresses = function (s) {
  const SEG_COUNT = 4;
  const ans = [];
  const cache = new Array();
  const dfs = (current = 0) => {
    const len = cache.length;
    if (current === s.length) {
      if (len === SEG_COUNT) {
        ans.push(cache.join("."));
      }
      return;
    }

    if (len === SEG_COUNT) return; //剪枝
    if (s[current] === "0") {
      //如果是0，因为不能有前导0，直接push
      cache.push(0);
      dfs(current + 1);
      cache.pop();
      return;
    }
    let sum = 0;
    for (let i = current; i < current + 3 && i < s.length; i++) {
      const num = parseInt(s[i]);
      sum = sum * 10 + num;
      // 判断是否满足条件
      if (sum > 0 && sum <= 255) {
        cache.push(sum);
        dfs(i + 1);
        cache.pop();
      }
    }
  };
  dfs();
  return ans;
};
console.log(restoreIpAddresses("25525511135"));

//自己写的
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = new Set();
  function dfs(s, i = 0, sum = 0, cache = []) {
    // 如果长度为0，或者当前i已经到末尾的后一个了，就直接返回
    if (cache.length === 4 || i === s.length) {
      cache.length === 4 && i === s.length && res.add(cache.join("."));
      return;
    }

    const current = parseInt(s[i]); // 获取当前的数字
    const sum1 = sum * 10 + current; // 与前面的数字合并
    if (sum1 === 0) {
      // 如果是0，只有一种情况，当前current是0，直接push到数组里
      cache.push(sum1);
      dfs(s, i + 1, 0, cache);
      cache.pop();
    } else if (sum1 > 255) {
      cache.push(sum); // 如果加上current大于255，那么就只有一种选择：加入前面的sum
      dfs(s, i, 0, cache); // 并且继续递归，此时i不变，sum重置为0
      cache.pop();
    } else {
      // 既然小于255，我们继续递归看他结合下一个能不能又小于255
      dfs(s, i + 1, sum1, cache);

      // 也可以直接将它放进来
      cache.push(sum1);
      dfs(s, i + 1, 0, cache);
      cache.pop();
    }
  }

  dfs(s);
  return [...res];
};
