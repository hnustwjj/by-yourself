type X = {
  x: {
    a: 1
    b: "hi"
  }
  y: "hey"
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: "hi"
  }
  readonly y: "hey"
}

// 使用keyof raw extends never让编译器触发计算
type DeepReadonly<raw> = 
  keyof raw extends never
    ? never
    : { readonly [k in keyof raw]: raw[k] extends object ? DeepReadonly<raw[k]> : raw[k] }

type Todo = DeepReadonly<X> // should be same as `Expected`

export {}
