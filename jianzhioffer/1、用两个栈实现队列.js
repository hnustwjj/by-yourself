// https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
var CQueue = function () {
  this.stack1 = []
  this.stack2 = []
}

CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
}

CQueue.prototype.deleteHead = function () {
  // 入栈出栈，相当与反过来，形成了队列了
  if (this.stack2.length === 0) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop() || -1
}
