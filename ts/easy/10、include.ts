// A[number]的返回值其实是联合类型诶！！
// 也就是说，获取到A中所有数字属性对应的值的联合类型
// 然后判断T是否在其中即可
type Includes<A extends unknown[], T> = T extends A[number] ? true : false

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio"> // expected to be `false`
