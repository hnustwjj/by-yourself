// http  s可能存在  两个斜线  匹配1个或多个字母  .  匹配一个或多个字母  .  匹配一个或多个字母
const urlReg = /https?:\/\/[A-z]+\.\w+\.\w+/
const url = "https://www.baidu.com"
console.log(urlReg.test(url))
