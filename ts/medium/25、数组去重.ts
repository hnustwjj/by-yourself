type Unique<arr, cache extends unknown[] = []> = arr extends [
  infer first,
  ...infer rest
]
  ? first extends cache[number]
    ? Unique<rest, [...cache]>
    : Unique<rest, [...cache, first]>
  : cache

type res = Unique<[1, 1, 3, 3, 2, [1, 2], [1, 2]]>
export {}
