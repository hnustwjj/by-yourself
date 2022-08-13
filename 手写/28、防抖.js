function debounce(fn, times) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      return fn(...args)
    }, times)
  }
}

//具有立即执行的防抖
function debounce(fn, time, immediate = false) {
  let timeout
  //是否调用过
  let isInvoke = false
  return function (...args) {
    clearTimeout(timeout)
    //如果是需要立即执行，并且还没有立即执行时
    if (immediate && !isInvoke) {
      fn.apply(this, args)
      //标记已经立即执行过了，下面都进行防抖操作，也就是else
      isInvoke = true
    } else {
      //延迟执行
      timeout = setTimeout(() => {
        fn.apply(this, args)
        //如果成功执行完，说明这一次防抖已经结束了
        //在下一次连续触发事件的时候，第一个触发的事件要立即执行
        isInvoke = false
      }, time)
    }
  }
}

//具有取消功能的防抖
function debounce(fn, time, immediate = false) {
  let timeout
  let isInvoke = false
  function foo(...args) {
    clearTimeout(timeout)
    if (immediate && !isInvoke) {
      fn.apply(this, args)
      isInvoke = true
    } else {
      timeout = setTimeout(() => {
        fn.apply(this, args)
        isInvoke = false
      }, time)
    }
  }
  //取消功能，在fn延迟执行的过程中如果调用了返回的函数对象的这个函数，会取消执行fn
  foo.cancel = function () {
    if (timeout) clearTimeout(timeout)
    timer = null
    isInvoke = null
  }
  return foo
}

const debouncefn = debounce(() => console.log(1), 10000)
debouncefn()
debouncefn()
debouncefn()
debouncefn()
debouncefn()
