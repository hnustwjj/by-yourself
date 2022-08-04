interface Todo {
  title: string
  description: string
  completed: boolean
}

// 第二个参数是，raw的key字面量的联合类型
// 例如raw = TODO，那么picks = 'title' | 'desciption' | 'computed'
type MyPick<raw, picks extends keyof raw> = {
  [k in picks]: raw[k]
}

type TodoPreview = MyPick<Todo, "title" | "completed">

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
}
export {}
