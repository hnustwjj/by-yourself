type arr1 = ["a", "b", "c"]
type arr2 = [3, 2, 1]

// 没啥，就直接提取出最后一个就行
// 提不出就never
type Last<A> = A extends [...infer res, infer last] ? last : never

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

export {}
