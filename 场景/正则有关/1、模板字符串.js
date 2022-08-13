function dd(template, data) {
  //正则
  const reg = /\{\{(\w+)\}\}/
  //匹配字符串中是否含有
  if (reg.test(template)) {
    //获得花括号内的字符串
    const name = reg.exec(template)[1]
    //替换
    template = template.replace(reg, data[name])
    //递归处理
    return dd(template, data)
  }
  //如果没有匹配，则直接返回
  return template
}

let template = "我是{{name}}，年龄{{age}}，性别{{sex}}"
let person = {
  name: "布兰",
  age: 12,
}
console.log(dd(template, person)) // 我是布兰，年龄12，性别undefined
