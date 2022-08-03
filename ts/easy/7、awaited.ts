type ExampleType = Promise<number>

// 原来泛型也是可以通过 infer 获取到的
type MyAwaited<raw> = raw extends Promise<infer T> ? T : never

type Result = MyAwaited<ExampleType> // string

export {}