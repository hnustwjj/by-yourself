function throttle(fn, times, immediately = true) {
  let pre = immediately ? 0 : Date.now()
  return function (...args) {
    const now = Date.now()
    if (Math.abs(now - pre) > times) {
      pre = now
      return fn(...args)
    }
  }
}

// 第一次是否立即执行
//leading为false表示不想开头立即触发
function throttle(fn, time, options = { leading: true, trailing: true }) {
  const { leading, trailing } = options
  let lastTime = 0
  let timer
  return function () {
    const nowTime = new Date().getTime()
    //如果不希望第一个触发的是立即执行的话，就将lastTime初值（所以加了0这个判断条件）设置为nowTime
    //这样的话时间间隔就会从0开始计算，直到时间间隔大于给定的time
    //lastTime === 0 其实可以用于表示是不是一段连续触发事件的第一个事件
    if (lastTime === 0 && leading === false) lastTime = nowTime
    const remainTime = time - (nowTime - lastTime)
    if (remainTime <= 0) {
      fn.apply(this)
      lastTime = nowTime
    }
  }
}

function throttle(fn, time, options = { leading: false, trailing: true }) {
  const { leading, trailing } = options
  let lastTime = 0
  let timer //保留周期末尾要触发的定时器
  return function (...args) {
    const nowTime = new Date().getTime()
    if (lastTime === 0 && leading === false) lastTime = nowTime
    const remainTime = time - (nowTime - lastTime)
    if (remainTime <= 0) {
      //这里是周期末尾，如果是在周期末尾重新调用函数触发而不是定时器触发
      //那么我们只希望执行调用触发，而不是定时器触发
      //所以如果有定时器的话，我们取消定时器
      if (timer) {
        clearTimeout(timer)
        //设置null的话下一次进入新的周期才会在下面的if上继续添加定时器
        timer = null
      }

      //执行调用触发
      fn(...args)
      lastTime = nowTime
    }

    // 如果是在周期中间执行的该函数，就设置定时器让他去末尾执行
    else if (trailing && !timer) {
      timer = setTimeout(() => {
        fn(...args)
        timer = null
        //执行完之后要重置参数，如果不希望第一次要执行的话，我们将lastTIme设置为0，也就是初值
        //重新进入函数的时候，会在上面的判断中设置为nowTime，那么时间间隔就会从0开始计算

        //如果我们希望第一次要执行的话，lastTIme就是现在的时间戳，这个时间戳就是周期末尾的时间戳。
        //下一次进入函数的时候，会跟这个时间戳进行计算获取时间间隔。
        //如果时间间隔小于time的话，是不会立即执行的
        lastTime = !leading ? 0 : new Date().getTime() + time
      }, remainTime)
    }
  }
}
const throttlefn = throttle(() => console.log(1), 10)
throttlefn()
throttlefn()
throttlefn()
throttlefn()
throttlefn()
