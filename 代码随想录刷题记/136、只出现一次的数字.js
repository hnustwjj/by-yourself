/**
 * 简单，异或，水一天，太累了
 */
 var singleNumber = function(nums) {
  let res = 0
  for(let i = 0 ; i < nums.length ; i++){
      res = res ^ nums[i]
  }
  return res
};