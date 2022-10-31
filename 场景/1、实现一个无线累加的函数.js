/**
    var foo = function(...args){}  //要求实现函数体
    var f1 = foo(1,2,3)    f1.get() = 6 //6
    var f2 = foo(1)(2,3)   f2.get() = 6 //6
    var f3 = foo(1)(2)(3)(4)   f3.get() = 10 //10  
 */

// 返回一个可以继续接受参数的函数，这个函数存在get方法，获取当前args的和
// 这个返回的函数，返回的内容跟foo一样，递归调用
function foo(...args) {
  const retFn = (...args2) => foo(...args, ...args2);
  retFn.get = () => args.reduce((p, n) => p + n);
  return retFn;
}

const f1 = foo(1, 2, 3);
const f2 = foo(1)(2)(3)(4);

console.log(f1.get(), f2.get());
