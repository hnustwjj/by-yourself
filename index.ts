type Flat<T extends any> = T extends any[]
  ? T extends [infer F, ...infer Rest]
    ? [...Flat<F>, ...Flat<Rest>]
    : []
  : [T]

//[1,2,3,4,5]
type res = Flat<[[1, 2, 3], 4, [[5]]]>
export {}
