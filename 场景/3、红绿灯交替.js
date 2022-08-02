const task = (timer, light) => new Promise(resolve => {
    setTimeout(() => {
      if (light === 'red') {
        red()
      } else if (light === 'green') {
        green()
      } else if (light === 'yellow') {
        yellow()
      }
      resolve()
    }, timer)
  }
)
function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}
const taskRunner = async () => {
  await task(1000, 'red')
  await task(2000, 'green')
  await task(300, 'yellow')
  taskRunner()
}
taskRunner()
