// 不要忘了在类型里也是可以使用拓展运算符的哟
type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B]
type Result = Concat<[1], [2]> // expected to be [1, 2]
export {}
