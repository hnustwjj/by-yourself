type Replace<
  S,
  F extends string | number | boolean,
  T extends string | number | boolean
> = S extends `${infer L}${F}${infer R}` //提取出From左右的两部分，能提取就递归，否则就原物返回
  ? `${Replace<L, F, T>}${T}${Replace<R, F, T>}`
  : S
type replaced = Replace<"types are fun!", "fun", "awesome"> // expected to be 'types are awesome!'
type replaced2 = Replace<'t y p e s', ' ', ''> // expected to be 'types'

export {}
