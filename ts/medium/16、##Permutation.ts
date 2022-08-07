// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
// https://github.com/type-challenges/type-challenges/issues/614

// 判断T是否是空，如果是空就返回空数组
// 否则就进行T（U）的遍历，U extends U可以将联合类型逐一分解，然后继续进行递归
type Permutation<T, U = T> =
  [T] extends [never] 
    ? [] 
    : U extends U 
      ? [U, ...Permutation<Exclude<T,U>>]
      : never
type perm = Permutation<"A" | "B" | "C">

export {}
