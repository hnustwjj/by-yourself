// 懒计算，用下面这种方式去触发计算过程
// T extends any是肯定会执行的
type DeepClone<T extends Record<string, any>> = T extends any
  ? {
      [k in keyof T]: T[k] extends Record<string, any> ? DeepClone<T[k]> : T[k];
    }
  : never;

type Res = DeepClone<{
  a: 1;
  b: {
    c: number;
  };
}>;

export {};
