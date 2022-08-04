type arr1 = ["a", "b", "c", "d"]
type arr2 = [3, 2, 1]
// 这个根前面那题不是一样吗。。。就返回的东西不一样而已= =、
type Pop<A extends unknown[]> = A extends [...infer left, infer last]
  ? left
  : never

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

export {}
