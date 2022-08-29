type GreaterThen<num1, num2, cache extends unknown[] = []> =
 num1 extends num2
  ? false
  : cache["length"] extends num1
    ? false
    : cache["length"] extends num2
      ? true
      : GreaterThen<num1, num2, [...cache, unknown]>
// 只能实现正数的比较
type res = GreaterThen<3, 2>
export {}
