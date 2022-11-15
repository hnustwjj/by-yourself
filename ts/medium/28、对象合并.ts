type MergeObject<T, V> = {
  [k1 in keyof T]: T[k1];
} & {
  [k1 in keyof V as k1 extends keyof T ? never : k1]: V[k1];
};

type res = MergeObject<{ a: 1; b: 2 }, { a: 2; c: 3 }>;

type res2 = keyof res
type arr = [1,2,3]

type res3 = arr[number]
export {};