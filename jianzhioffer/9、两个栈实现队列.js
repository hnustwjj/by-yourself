/**
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

 

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用
 */
var CQueue = function () {
  this.stack1 = [];
  this.stack2 = []; // 真正要输出的栈
};

CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

CQueue.prototype.deleteHead = function () {
  // 如果length === 0 ，就从stack1中弹出到stack2
  if (this.stack2.length === 0) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop() || -1;
};
