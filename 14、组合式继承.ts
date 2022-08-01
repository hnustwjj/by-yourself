function Person(name?: string, age?: number) {
  this.name = name
  this.age = age
}

function Student(name, age, stdno) {
  Person.call(this, name, age)
  this.stdno = stdno
}

// 缺点：调用两次构造方法
Student.prototype = new Person()
