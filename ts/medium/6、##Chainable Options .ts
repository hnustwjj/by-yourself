declare const config: Chainable

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get()
// https://github.com/type-challenges/type-challenges/issues/13951
type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K, //判断传入的K是不是在T中已存在，如果存在再继续判断V与原先的是否一样
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>> //option返回的是Chainable对象，将状态保存在T中
  get: () => T
}

type res = Record<"foo", 123>
// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}

export {}
