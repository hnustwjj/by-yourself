/**
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 */

var findContinuousSequence = function (target) {
  const res = [];
  let sum = 0;
  const arr = [];
  for (let i = 1; i < target; i++) {
    // 默认是往里面加
    sum += i;
    arr.push(i);
    // 如果加了之后等于，就push，并且把前面的出队
    if (sum === target) {
      res.push([...arr]);
      const num = arr.shift();
      sum -= num;
    }
    // 如果加了之后大于，就一直出队，直到小于
    // 为什么要shift到小于呢？因为我们每次for循环默认的操作都是会push i，如果只shift到等于，那么会在等于判断前push后一个数
    else if (sum > target) {
      while (sum >= target) {
        if (sum === target) res.push([...arr]);
        const num = arr.shift();
        sum -= num;
      }
    }
  }
  return res;
};

findContinuousSequence(15);
