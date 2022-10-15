/**
https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/
 */


var MaxQueue = function () {
  this.queue = [];
  this.max_queue = [];
};

// 单调队列
MaxQueue.prototype.max_value = function () {
  if (!this.queue.length) return -1;
  return this.max_queue[0];
};

MaxQueue.prototype.push_back = function (value) {
  // 原队列直接push
  this.queue.push(value);
  // 加入的数会将前面的小于这个数的队列内容都pop，形成单调递增队列
  while (this.max_queue.length && this.max_queue[this.max_queue.length - 1] < value) {
      this.max_queue.pop();
  }
  this.max_queue.push(value);
};

MaxQueue.prototype.pop_front = function () {
  if (!this.queue.length) return -1;
  let front = this.queue.shift()
  if (front === this.max_queue[0]) {
      this.max_queue.shift();
  }
  return front;
};
