type BuildArray<num, cache extends unknown[] = []> = cache["length"] extends num
  ? cache
  : BuildArray<num, [...cache, unknown]>

// 利用构造数组，构造一个长度为num1+num2的字面量数组类型，获取length
type add<num1 extends number, num2 extends number> = [
  ...BuildArray<num1>,
  ...BuildArray<num2>
]["length"]

type res = add<1, 2>

