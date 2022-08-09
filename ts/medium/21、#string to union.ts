type Test = "123"

// | 递归处理，如果是never，会被联合类型忽略
type StringToUnion<T extends string> = T extends `${infer L}${infer R}`
  ? L | StringToUnion<R>
  : never
type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"

export {}
