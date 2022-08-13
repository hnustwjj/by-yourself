let d = new Date()
// 获取年，getFullYear()返回4位的数字
let year = d.getFullYear()
// 获取月，月份比较特殊，0是1月，11是12月
let month = d.getMonth() + 1
// 变成两位
month = month < 10 ? "0" + month : month
// 获取日
let day = d.getDate()
day = day < 10 ? "0" + day : day
console.log(year + "-" + month + "-" + day)
