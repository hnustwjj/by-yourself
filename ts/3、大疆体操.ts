type Solution<raw extends Record<string, any>, K = keyof raw> = K extends string
  ? Record<K, raw[K]>
  : never

// { a: 1; b: 2 } -> Record<'a',1> | Record<'b',2>

// 思路：就取出raw的所有key的联合类型
// 然后用k extends k进行遍历(后来才想起来，联合类型放在extends左边时会自动拆分)
// 用extends string进行约束，才能取值
type res = Solution<{ a: 1; b: 2 }>

type res2 = keyof { a: 1; b: 2 }
export {}
