type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
type Flatten<A extends unknown[]> = 
A extends [infer first, ...infer rest] //通过这种方式递归去遍历数组的每一项
  ? first extends unknown[] 
    ? [...Flatten<first>, ...Flatten<rest>] // 如果first是数组，就递归调用flatten
    : [first,...Flatten<rest>] // 就直接放入结果中
  : [] // 如果提取不出来就直接返回空数组

export {}