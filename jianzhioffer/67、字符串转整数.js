/**
 * @param {string} str
 * @return {number}
 */
function judge(res, flag) {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  res = flag ? -res : res;
  if (!flag) res = Math.min(res, max);
  else res = Math.max(res, min);
  return res;
}
var strToInt = function (str) {
  let cache = str.trim();
  let res = 0;
  let flag; // 判断是否是正数
  let isStart = false; // 判断是否已经到了数字
  const number = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  for (let i = 0; i < cache.length; i++) {
    // 如果是数字，就累加
    if (number.has(cache[i])) {
      res = res * 10 + +cache[i];
      if (!isStart) isStart = true;
    } else {
      if (
        (cache[i] === "-" || cache[i] === "+") &&
        flag === undefined &&
        !isStart
      ) {
        if (cache[i] === "-") flag = true;
        if (cache[i] === "+") flag = false;
      } else return judge(res, flag);
    }
  }
  return judge(res, flag);
};
