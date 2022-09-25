/**
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

 

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.

 */
var MinStack = function () {
  this.minStack = [];
  this.stack = [];
};

MinStack.prototype.push = function (x) {
  this.stack.push(x);
  let min = this.minStack[this.minStack.length - 1] ?? Infinity;
  this.minStack.push(Math.min(min, x));
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.min = function () {
  return this.minStack[this.minStack.length - 1];
};
