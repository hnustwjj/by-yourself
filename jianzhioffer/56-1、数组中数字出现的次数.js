/**
一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
示例 2：

输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]

 */

//  1 -> 001 
//  2 -> 010
//  3 -> 011
//  3 -> 011
// 1，2，3，3异或结果就是011
var singleNumbers = function(nums) {
  const res = nums.reduce((p,n)=>p^n,0)
  // 从右往左找到第一个“异”的位置
  let div = 1
  while((div & res) !== div){
    div = div << 1
  }
  let a = 0
  let b = 0
  // 根据这个位置进行分组异或，得到结论
  nums.forEach(i=>{
    if((i & div) === div){
      a = a ^ i
    }else{
      b = b ^ i
    }
  })
  return [a,b]
};
singleNumbers([1,2,3,3])
