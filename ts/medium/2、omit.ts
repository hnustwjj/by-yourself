interface Todo {
  title: string
  description: string
  completed: boolean
}

// 使用as进行 key的 重映射
type MyOmit<raw, K extends keyof raw> = {
  [k in keyof raw as k extends K ? never : k]: raw[k]
}

type TodoPreview = MyOmit<Todo, "description" | "title">

const todo: TodoPreview = {
  completed: false,
}
