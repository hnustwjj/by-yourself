type Flat<T extends Array<unknown>,Cache extends Array<unknown>= []> = 
T extends [
  infer First,
  ...infer rest
] 
? First extends Array<unknown> 
  ? Flat<rest,[...Cache,...Flat<First>]>
  : Flat<rest,[...Cache,First]>
: Cache

type res = Flat<[1,2,[1,2,[1,2]]]>
export {}