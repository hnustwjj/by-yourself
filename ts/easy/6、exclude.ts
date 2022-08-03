// 才想起来对联合类型进行extends时
// 会将他们  逐一拆开  进行操作
type MyExclude<T, U> = T extends U ? never : T

type Result = MyExclude<"a" | "b" | "c", "a"> // 'b' | 'c'
