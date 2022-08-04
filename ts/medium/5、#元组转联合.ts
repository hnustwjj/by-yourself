type Arr = ["1", "2", "3"]
// 直接取就是联合了
type TupleToUnion<A extends unknown[]> = A[number]
type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
