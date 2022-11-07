type Flat<T extends Array<unknown> , cache extends Array<unknown> = []> = 
T extends [infer F,...infer R] 
  ? F extends Array<unknown>
    ? Flat<R,[...cache,...Flat<F>]>
    : Flat<R,[...cache,F]>
  : cache

type res = Flat<[[1,9],2,3,[2,4]]>

type Unique<T extends Array<unknown> , cache extends Array<unknown> = []> = 
T extends [infer F,...infer R] 
  ? F extends cache[number]
    ? Unique<R,[...cache]>
    : Unique<R,[...cache,F]>
  : cache

type res2 = Unique<[1,2,1]>

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

export {}