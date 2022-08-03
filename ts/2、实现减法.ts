// 也是利用构造数组，提取出num2长度的数组，剩下的数组长度就是减法的答案
type sub<num1 extends number, num2 extends number> = BuildArray<num1> extends [
  ...BuildArray<num2>,
  ...infer rest
]
  ? rest["length"]
  : never

type subres = sub<2, 1>
