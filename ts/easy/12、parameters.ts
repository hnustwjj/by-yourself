const foo = (arg1: string, arg2: number): void => {}

// 取出参数数组，返回即可
type MyParameters<raw> = raw extends (...args: infer R) => void ? R : never

type FunctionParamsType = MyParameters<typeof foo>
