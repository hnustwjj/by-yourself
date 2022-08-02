function log(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(num)
      resolve()
    }, 1000)
  })
}

async function foo(arr) {
  for (const item of arr) {
    await log(item)
  }
}

foo([1, 2, 3])
