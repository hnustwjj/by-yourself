const jzsp = {
  name: "wjj",
}

// 原型式继承就是通过改变原型来实现继承的方法
const me = Object.create(jzsp)

const you = {}
Object.setPrototypeOf(you, jzsp)

// 寄生式继承就是将上面的过程封装到函数内

function inherit(parent) {
  return Object.create(parent)
}

const another = inherit(jzsp)
console.log(another.name)
export {}
