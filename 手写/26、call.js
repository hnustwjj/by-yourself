Function.prototype.call = function (thisArg, ...args) {
  const fn = this
  if (thisArg === null || thisArg === undefined) thisArg = window
  thisArg = Object(thisArg)

  thisArg.fn = fn
  const res = thisArg.fn(...args)
  delete thisArg.fn
  return res
}

function run() {
  console.log(this.name, "running")
}

const me = {
  name:'jzsp'
}
run.call(me)