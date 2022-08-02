function myInstanceOf(left: any, right: any): boolean {
  // 递归终点
  if (left === null || right === null) {
    return false;
  }
  if (left === right.prototype) {
    return true;
  }
  // 递归调用
  return myInstanceOf(left.__proto__, right);
}
console.log(myInstanceOf([], Object));

console.log(myInstanceOf(Function, Function));
export {}