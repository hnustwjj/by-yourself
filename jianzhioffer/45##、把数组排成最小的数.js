var minNumber = function (nums) {
  nums.sort((a, b) => {
    // 判断两个数字拼接之后的大小关系即可
    if (`${a}${b}` > `${b}${a}`) return 1;
    return -1;
  });
  return nums.join("");
};
