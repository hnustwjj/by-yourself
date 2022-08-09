// https://leetcode.cn/problems/min-stack/

// 用一个辅助栈，栈的每一个元素代表：原栈从0到对应元素最小的值
var MinStack = function () {
  this.min = [Infinity]
  this.stack = []
}

// 如果栈是[2, 1, 4]
// 辅助栈是 [2, 1, 1]
MinStack.prototype.push = function (val) {
  const min = this.min[this.min.length - 1]
  this.min.push(Math.min(min, val))
  this.stack.push(val)
}

MinStack.prototype.pop = function () {
  this.stack.pop()
  this.min.pop()
}

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1]
}
