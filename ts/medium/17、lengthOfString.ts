// 每次看看能不能提取出第一个，如果可以的话，就递归+1，否则就返回0
type LengthOfString<S extends string> = S extends `${infer first}${infer rest}`
  ? add<LengthOfString<rest>, 1>
  : 0

type res = LengthOfString<"">
type res1 = LengthOfString<"abcdefg">
type res2 = LengthOfString<" ">
export {}
