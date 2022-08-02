const start = new Date().getTime()
const intver = 1000
let count = 0
let cur = intver

console.log("开始时间：", start)

function loop() {
  count++
  const offset = new Date().getTime() - (start + count * intver) // 当前执行的时间-程序开始执行的时间-前面定时器执行的时间 = 偏移量
  cur = intver - offset //下次延时就见去这个偏移量
  console.log("代码开始执行时刻：", offset, "下次执行间隔时间：", cur)
  setTimeout(loop, cur)
}
setTimeout(loop, cur)
