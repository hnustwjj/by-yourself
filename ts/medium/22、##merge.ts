type foo = {
  name: string
  age: string
}
type coo = {
  age: number
  sex: string
}

// 不要忘了遍历的时候可以通过|将多个keyof合并阿阿奥奥阿阿阿阿阿阿阿
type Merge<F, S> = {
  [key in keyof F | keyof S]: key extends keyof S //后面的优先级大于前面的，所以先判断
    ? S[key]
    : key extends keyof F
    ? F[key]
    : never
}
type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}

export {}
