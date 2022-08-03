interface Todo {
  title: string
  description: string
}

// 先通过keyof取出raw的每个属性的key的联合
// 用k遍历这个联合类型
// 添加readonly
type MyReadonly<raw> = {
  readonly [k in keyof raw]: raw[k]
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property

export {}
