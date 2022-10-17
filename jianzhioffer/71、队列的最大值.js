// 不错的题解 : https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/solution/ru-he-jie-jue-o1-fu-za-du-de-api-she-ji-ti-by-z1m/
var MaxQueue = function () {
  this.queue = [];
  this.max_queue = [];
};

MaxQueue.prototype.max_value = function () {
  if (!this.queue.length) return -1;
  return this.max_queue[0]
};

MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value)
  // 如果队列是单调递减的，插入的数一定要比前面的数都小，所以要弹出前面比当前数大的数
  while(this.max_queue.length && this.max_queue[this.max_queue.length - 1] < value){
      this.max_queue.pop()
  }
  this.max_queue.push(value)    
};

MaxQueue.prototype.pop_front = function () {
  if(!this.queue.length) return -1
  const front = this.queue.shift()
  if(front === this.max_queue[0]) this.max_queue.shift()
  return front;
};