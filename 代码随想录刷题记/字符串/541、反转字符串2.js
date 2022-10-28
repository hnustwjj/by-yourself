// 递归的语意：字符串s，
// 小于k个，全部反转
// 小于2k个，大于k个，反转前k个
var reverseStr = function (s, k) {
  // 小于k个，全部反转
  if (s.length < k) return s.split("").reverse().join("");
  // 反转前k个
  const str1 = s.slice(0, k);
  const str2 = s.slice(k, 2 * k);
  // 拼接，剩余的字符串做同样操作
  return (
    str1.split("").reverse().join("") + str2 + reverseStr(s.slice(2 * k), k)
  );
};
