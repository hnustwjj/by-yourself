// 提取出空格左右两侧
// 左侧也再提取出第一个
type Capitalize<S> = S extends `${infer F}${infer L} ${infer R}`
  ? `${Uppercase<F>}${L} ${Capitalize<R>}`
  : S

type capitalized = Capitalize<"hello world"> // expected to be 'Hello world'
export {}
