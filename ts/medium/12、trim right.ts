// 用模板字面量提取出除了左边空号以外的内容，继续递归
type TrimLeft<S> = S extends ` ${infer R}` ? TrimLeft<R> : S
type TrimRight<S> = S extends `${infer R} ` ? TrimRight<R> : S

type trimed = TrimRight<TrimLeft<"  Hello World  ">> // expected to be 'Hello World  '

export {}
