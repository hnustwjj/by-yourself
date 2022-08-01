const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class myPromise {
  state = PENDING;
  value: any;
  reason: any;
  onFulfilledCallbacks = [] as Function[];
  onRejectedCallbacks = [] as Function[];
  constructor(exectuor: (resolve: any, reject: any) => void) {
    const resolve = (value: any) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };
    const reject = (reason: any) => {
      if (this.state === REJECTED) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };
    exectuor(resolve, reject);
  }
  then(onfulfilled?: Function, onrejected?: Function) {
    // 很重要，传递参数的关键
    if (!onfulfilled) onfulfilled = (v: any) => v;
    if (!onrejected) {
      onrejected = (e: any) => {
        throw e;
      };
    }
    const p = new Promise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => execute(onfulfilled, this.value, resolve, reject), 0);
      }
      if (this.state === REJECTED) {
        setTimeout(() => execute(onrejected, this.reason, resolve, reject));
      }
      if (this.state === PENDING) {
        this.onFulfilledCallbacks.push(() =>
          setTimeout(() => execute(onfulfilled, this.value, resolve, reject))
        );
        this.onRejectedCallbacks.push(() =>
          setTimeout(() => execute(onrejected, this.reason, resolve, reject))
        );
      }
    });
    return p;
  }
}

function execute(cb: any, data: any, resolve: any, reject: any) {
  try {
    const res = cb(data);
    // 如果是promise对象，那么返回的返回的promise对象的状态由它决定
    if (res instanceof myPromise) {
      res.then(resolve, reject);
    } else {
      // 否则就包装为成功的prmoise
      resolve(res);
    }
  } catch (e) {
    reject(e);
  }
}

new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
})
  .then((res: any) => {
    console.log(res);
    return 3;
  })
  .then()
  .then(res => console.log(res));
console.log(2);

// 先输出2，两秒后打印1和3
export {}