function sleep(time){
  let start=Date.now()
  while(Date.now()<start+time){
      continue
  }
}

function test(){
  console.log(1111)
  sleep(2000)
  console.log(2222)
}
test()