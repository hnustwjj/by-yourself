class EventBus {
  constructor() {
    // 用key来保存对应的callbacks数组
    // 类似于vue里的weakMap
    // 但是这里只封装一层，仅仅对key进行存储，而vue中是对对象和对象的属性进行存储）
    this.keyMap = {}
  }
  on(key, callback) {
    // 获取callbacks（类似于vue的获取dep）
    this.keyMap[key] = this.keyMap[key] ?? []
    this.keyMap[key].push(callback)
  }
  emit(key, ...args) {
    // 触发callback
    this.keyMap[key].forEach(callback => {
      callback.call(null, ...args)
    })
  }
}

const eventBus = new EventBus()
// 注册事件
eventBus.on("riyangzai", duration => console.log(`洋仔被日了${duration}小时`))
eventBus.on("riyangzai", duration => console.log(`洋仔还想被日${duration}小时`))
// 触发事件
eventBus.emit("riyangzai", 1000)
