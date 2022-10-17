/**
   其实就是找到小于等于target的最左侧的位置，简单的
 */
 var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while(left <= right){
      const mid = ~~((left + right)/2)
      if(nums[mid] >= target){
          right = mid - 1
      }else{
          left = mid + 1
      }
  }
  return left
};