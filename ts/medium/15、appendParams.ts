type Fn = (a: number, b: string) => number

type AppendArgument<Fn, Arg> = Fn extends (...args: infer Args) => infer R
  ? (...args: [...Args, Arg]) => R // args是数组类型，将原来提取出来的类型数组传进去即可
  : Fn

type Result = AppendArgument<Fn, boolean>
// 期望是 (a: number, b: string, x: boolean) => number

export {}
