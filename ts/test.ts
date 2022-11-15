type Flat<T extends Array<unknown>,Cache = never> = 
T extends [infer F,...infer R]
  ? F extends Array<unknown>
    ? Flat<R,Cache | Flat<F>>
    : Flat<R,Cache | F>
  : Cache






  
type res = Flat<[1,[2,"3"],Symbol]>[]