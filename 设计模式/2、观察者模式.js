class Subject {
  constructor(name) {
    this.name = name
    this.state = 1
    this.observers = []
  }
  setState(state) {
    this.state = state
    // 触发观察者（trigger响应式依赖）
    this.observers.forEach(observer =>
      observer.updateStateCallback(this.state, this.name)
    )
  }
  attach(observer) {
    // 收集观察者（track响应式依赖）
    this.observers.push(observer)
  }
}

class Observer {
  updateStateCallback(state, name) {
    console.log(`observer监听到${name}发生改变，触发回调:${state}`)
  }
}

const observer = new Observer()
const sub1 = new Subject("jzsp1")
sub1.attach(observer)
// 修改状态时，会trigger依赖
sub1.setState(2)
