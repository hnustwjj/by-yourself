type If<res, a, b> = res extends true ? a : b
type A = If<true, "a", "b"> // expected to be 'a'
type B = If<false, "a", "b"> // expected to be 'b'
