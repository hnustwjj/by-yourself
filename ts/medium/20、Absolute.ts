type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer R}` 
  ? R
  : T

type res = Absolute<100>
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"

export {}