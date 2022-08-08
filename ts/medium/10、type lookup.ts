interface Cat {
  type: "cat"
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal"
}

interface Dog {
  type: "dog"
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer"
  color: "brown" | "white" | "black"
}

// 我真是2b。。。只要把type提取出来就行了，我为啥要用T["type"]提type呢？难道是因为length？

// type LookUp<T extends { type: string }, K> = T["type"] extends K ? T : never
type LookUp<U, T> = U extends { type: T } ? U : never

type MyDogType = LookUp<Cat | Dog, "dog"> // expected to be `Dog`
