type find<arr extends unknown[], item extends unknown> = arr extends [
  infer first,
  ...infer rest
]
  ? first extends item
    ? true
    : find<rest, item>
  : false

type findres = find<[1, 2, 3], 5>
