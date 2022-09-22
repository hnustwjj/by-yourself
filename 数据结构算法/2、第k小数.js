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
  // 如果第k小数在等于区 [less+1,more]
  if(less+1 <= k - 1  && k - 1 <= more ){
    return splitNumber
  }else if(less >= k - 1){
    return getK(arr.slice(0,less+1),k)
  }else{
    console.log('去大于区',arr.slice(more+1),'找第',k-more - 1)
    return getK(arr.slice(more+1),k - more - 1)
  }

}






console.log(getK([1,2,7,4,5,6,7,8],8))