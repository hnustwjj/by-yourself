type Test = { id: "1" }

type AppendToObject<raw, U extends string, v> = {
  [K in keyof raw | U]: K extends keyof raw ? raw[K] : v
}

// 为什么这种不行呢？？
type AppendToObject2<raw, U extends string, v> = {
  [K in keyof raw | U]: K extends U ? v : raw[K]
}







type Result = AppendToObject2<Test, "value", 4> // expected to be { id: '1', value: 4 }

export {}
