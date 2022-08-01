function person(name, age) {
  this.name = name
  this.age = age
}
person.prototype.jzsp = () => console.log("jzsp")

function student(name, age, stdno) {
  person.call(this, name, age)
  this.stdno = stdno
}

function inherit(son, parent) {
  son.prototype = Object.create(parent.prototype)
  // 不要忘记这里是原型对象的constructor
  son.prototype.constructor = son
}

//修改原型链和constructor
inherit(student, person)
const me = new student(1, 1, 1)
console.log(me)
me.jzsp()
