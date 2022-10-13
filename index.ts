type test<T extends Record<string, any>> = T extends { c: any }
  ? { a: number; c: number }
  : { d: number; b: number };

type res1 = test<{ c: 1 }>;
type res2 = test<{ d: 1 }>;

export {};
