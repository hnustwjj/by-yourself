// 在这里我们用的是[left,right]的区间，那么while的判断条件需要变化
// 找到最左侧时，在等于时需要缩小右侧，最后返回left
// 找到最右侧时，在等于时需要缩小左侧，最后返回right

function findLeft(arr,target){
  let left = 0
  let right = arr.length - 1
  while(left <= right){
    const mid = ~~((left+right)/2)
    // 如果中间的小于要找的，就去右边
    if(arr[mid] < target){
      left = mid + 1
    }else{
      right = mid - 1
    }
  }
  return left
}
function findRight(arr,target){
  let left = 0
  let right = arr.length - 1
  while(left <= right){
    const mid = ~~((left+right)/2)
    // 如果中间的大于要找的，就去左边
    if(arr[mid] > target){
      right = mid - 1
    }else{
      left = mid + 1
    }
  }
  return right
}
console.log(findLeft([1,1,1,1,2],1))
console.log(findRight([1,1,1,1,2],1))

function findCount(arr,target){
  return findRight(arr,target) - findLeft(arr,target) + 1
}

console.log(findCount([1,1,1,1,2],1))