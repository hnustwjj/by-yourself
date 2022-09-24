function sum(a, b) {
  return a + b;
}

function dou(num) {
  return num * 2;
}

function sqr(num) {
  return num * num;
}

const compose = comp(sum, dou, sqr);
console.log(compose(1, 2));

// function comp(...fns) {
//   return function (...args) {
//     if (fns.length === 0) return null
//     let pre = null
//     fns.forEach(fn => {
//       if (!pre) pre = fn(...args)
//       else {
//         pre = fn(pre)
//       }
//     })
//     return pre
//   }
// }

function comp(...fns) {
  if (fns.length === 0) return null;
  if (fns.length === 1) return fns[0];
  // 注意包裹的范围，如果fn包在里面，就是逆时针执行fns
  // 返回一个函数，这个函数可以接受参数，并这个函数的返回值是将前面已经组合的函数的执行结果作为参数传入到fn的执行结果
  return fns.reduce(
    (composed, fn) =>
      (...args) =>
        fn(composed(...args))
  );
}
