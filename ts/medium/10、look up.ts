interface Cat {
  type: "cat"
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal"
}

interface Dog {
  type: "dog"
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer"
  color: "brown" | "white" | "black"
}

// 直接用extends来判断是否包含K
// 不要用T[K]来提取
type LookUp<T, K> = T extends { type: K } ? T : never

type MyDogType = LookUp<Cat | Dog, "dog"> // expected to be `Dog`

export {}
