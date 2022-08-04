interface Todo {
  title: string
  description: string
  completed: boolean
}

// 先用Omit将K联合中的key先声明
// 再用k in K声明联合类型中的key
// 最后用交叉类型进行合并（nb）
type MyReadonly2<raw, K extends keyof raw> = Omit<raw, K> & {
  readonly [k in K]: raw[k]
}
const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

export {}
