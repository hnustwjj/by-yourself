/**
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

输入：nums = [3,4,3,3]
输出：4

输入：nums = [9,1,7,9,7,9,7]
输出：1
 */
var singleNumber = function(nums) {
  // 统计每一位的1的个数
  let arr = new Array(32).fill(0)
  nums.forEach(num=>{
      let idx = 0
      while(num !== 0){
          if(num&1){
              // 取余，因为如果一个数出现了三次，那么对应的位也会是3的倍数
              arr[idx] = (arr[idx]+1)%3
          }
          num = num>>1
          idx++
      }
  })
  // 根据arr求值 
  let c = 1
  let res = 0
  for(const i of arr){
      if(i === 1){
          res += c
      }
      c *= 2
  }
  return res
};
console.log(singleNumber([3,4,3,3]))