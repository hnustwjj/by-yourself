type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

// 用infer提取值
type First<raw extends any[]> = 
  raw extends [infer first , ...infer rest]
    ? first
    : never
type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3