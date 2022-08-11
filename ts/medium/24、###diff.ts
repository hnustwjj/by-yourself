type Diff1<T, U> = {
  [key in Exclude<keyof (T & U), keyof (T | U)>]: key extends keyof T //遍历合并后的
    ? T[key]
    : key extends keyof U
    ? U[key]
    : never
}

// 或者这样写
type Diff2<T, U> = {
  [key in Exclude<keyof (T & U), keyof (T | U)>]: (T & U)[key]
}

// your answers
type Diff4<T, U> = Omit<T & U, keyof T & keyof U>

type Diff3<T, U> = Omit<T & U, keyof (T | U)>

type jiaocha<T, U> = keyof (T & U)
type union<T, U> = keyof (T | U)
type test = jiaocha<Foo, Bar>
type test2 = union<Bar, Foo>

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  gender: number
}

export {}
