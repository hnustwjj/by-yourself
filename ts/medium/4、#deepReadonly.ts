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

// 使用[raw] extends [never]让编译器触发计算
type DeepReadonly<raw> =
 [raw] extends [never]
  ? never
  : {
      readonly [k in keyof raw]: raw[k] extends object
        ? DeepReadonly<raw[k]>
        : raw[k]
    }

type Todo = DeepReadonly<X> // should be same as `Expected`

export {}
