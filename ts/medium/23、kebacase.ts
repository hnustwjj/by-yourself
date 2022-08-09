type StrLen<S, cache extends unknown[] = []> = S extends `${infer f}${infer s}`
  ? StrLen<s, [...cache, unknown]>
  : cache["length"]

// 如果是字母，就判断是否是大写的
type isUppercase<s extends string> = s extends ZM | Uppercase<ZM>
  ? Uppercase<s> extends s
    ? true
    : false
  : false

type KebabCase<S, cache extends string = ""> = S extends `${infer f}${infer s}`
  ? isUppercase<f> extends true //如果第一个是大写
    ? StrLen<cache> extends 0 // 如果是第一位
      ? KebabCase<s, `${cache}${Lowercase<f>}`> // 如果是第一位，就直接拼接小写
      : KebabCase<s, `${cache}-${Lowercase<f>}`> //否则加个杠
    : KebabCase<s, `${cache}${f}`> // 不是大写就直接拼接
  : cache //不能提取就直接返回cache

type res1 = KebabCase<"FooBarBaz"> //'foo-bar-baz'>
type res2 = KebabCase<"fooBarBaz"> // 'foo-bar-baz'>
type res3 = KebabCase<"foo-bar"> // 'foo-bar'>
type res4 = KebabCase<"foo_bar"> // 'foo_bar'>
type res5 = KebabCase<"Foo-Bar"> // 'foo--bar'>
type res6 = KebabCase<"ABC"> // 'a-b-c'>
type res7 = KebabCase<"-"> // '-'>
type res8 = KebabCase<""> // ''>
type res9 = KebabCase<"😎"> // '😎'>

type ZM =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
