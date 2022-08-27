// 利用递归，每次判断第一个是否相
// 不能匹配到第一个说明找完了，返回false
type find<arr extends unknown[], item extends unknown> = arr extends [
  infer first,
  ...infer rest
]
  ? first extends item
    ? true
    : find<rest, item>
  : false


type findres = find<[1, 2, 3], 5>
