/**
  // 使用前
  fs.readFile('./index.js', (err, data) => {
    if(!err) {
        console.log(data.toString())
    }
    console.log(err)
  })
  // 使用promisify后
  const readFile = promisify(fs.readFile)
  readFile('./index.js')
    .then(data => {
        console.log(data.toString())
    })
    .catch(err => {
        console.log('error:', err)
    })
 */

function promisify(fn: any) {
  // 返回一个promisify之后的函数，需要接收参数以用于原来的调用逻辑
  return function (...args: any) {
    return new Promise((resolve, reject) => {
      const cb = (err: any, data: any) => {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      }
      fn(...args, cb)
    })
  }
}

function test(name: string, cb: any) {
  // 执行传入的回调函数
  cb(null, name)
}

const p = promisify(test)
test("name", (err: any, data: any) => console.log(data)) //原本用法，需要手动传入参数
p("name").then(res => console.log(res)) //现在只需要在then后链式调用即可
