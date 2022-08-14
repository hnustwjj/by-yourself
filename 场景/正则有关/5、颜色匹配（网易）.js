// 注意字母是a-f而不是a-z   .....
const reg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
console.log(reg.test("#ffbbad"))
console.log(reg.test("#Fc01DF"))
console.log(reg.test("#FFF"))
console.log(reg.test("#ffE"))
