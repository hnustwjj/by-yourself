function anoTherSetInterval() {
  let timer = null
  const control = {
    flag: true,
  }
  function setTimer() {
    if (control.flag) {
      timer = setTimeout(() => {
        console.log(1)
        setTimer()
      }, 1000)
    }
  }
  setTimer()
  return control
}

const res = anoTherSetInterval()
res.flag = false //控制
