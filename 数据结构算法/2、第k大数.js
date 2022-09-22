function swap(arr,a,b){
  [arr[a],arr[b]] = [arr[b],arr[a]]
}
function getK(arr,k){
  if(k > arr.length) return null
  const random = parseInt(Math.random() * arr.length)
  const splitNumber = arr[random]
  swap(arr,random,arr.length - 1)
  let less = -1
  let more = arr.length - 1
  let index = 0
  while(index < more){
    if(arr[index] < splitNumber) swap(arr,index++,++less)
    else if(arr[index] === splitNumber) index++
    else swap(arr,index,--more)
  }
  swap(arr,arr.length-1,more)
  console.log(splitNumber)
  console.log(arr.slice(0,less+1))
  console.log(arr.slice(more+1))
  // 如果第k大数在等于区
  // if(less < k  && more >= k ){
  //   return splitNumber
  // }else if(less >= k){
  //   return getK(arr.slice(0,less+1),k)
  // }else{
  //   return getK(arr.slice(more+1),)
  // }

}






console.log(getK([1,2,7,4,5,6,7,8],1))