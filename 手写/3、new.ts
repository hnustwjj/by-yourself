function isObject(raw: any) {
  return typeof raw === "object" && raw !== null;
}
function myNew(fn: any, ...args: any) {
  // 创建一个对象，这个对象的原型指向构造函数的prototype
  const obj = Object.create(fn.prototype);
  // 执行函数，进行赋值
  const res = fn.apply(obj, args);
  // 判断返回值类型
  return isObject(res) ? res : obj;
}

function Person(this: any, name: string) {
  this.name = name;
}

console.log(myNew(Person, "jzsp"));
export {}