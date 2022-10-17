// 记住初始化的时候，left和right的边界，right定义的是arr.length
// 那么在设置right的数据的时候，就应该取mid而不是mid-1
// 并且判断也是left<right而不是left<=right
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;  // [left,right)
  while (left < right) {
    const mid = ~~((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return null
}

console.log(binarySearch([1,2,3],1))
console.log(binarySearch([1,2,3],2))
console.log(binarySearch([1,2,3],3))
console.log(binarySearch([1,2,3],4))
