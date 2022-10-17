/**
直接二分查找到是否有满足i ** 2 === num的数即可
因为不能用库函数，所以right取 num/2即可
 */
var isPerfectSquare = function(num) {
  if(num === 1) return true
  let left = 0
  let right = num / 2+1
  while(left < right){
      const mid = ~~((left + right)/2)
      const t = mid ** 2
      if(t > num) right = mid
      else if (t === num) return true
      else left = mid + 1
  }
  return false
};