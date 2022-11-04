// https://leetcode.cn/problems/shuffle-an-array/
var Solution = function (nums) {
  this.initial = [...nums]; //不要忘记解构
  this.nums = nums;
};

Solution.prototype.reset = function () {
  this.nums = [...this.initial];
  return this.nums;
};

// 从后向前进行更新
Solution.prototype.shuffle = function () {
  let len = this.nums.length;
  while (len) {
    const arr = this.nums;
    const index = ~~(Math.random() * len--);
    let temp = arr[index];
    arr[index] = arr[len];
    arr[len] = temp;
  }

  console.log(this.nums);
  return this.nums;
};
