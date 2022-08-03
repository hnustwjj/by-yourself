
type Push<A extends unknown[], T> = [...A, T]

type Result = Push<[1, 2], "3"> // [1, 2, '3']

export {}
