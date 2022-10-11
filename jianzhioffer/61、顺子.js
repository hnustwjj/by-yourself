/**
剑指 Offer 61. 扑克牌中的顺子
从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

 

示例 1:

输入: [1,2,3,4,5]
输出: True
 

示例 2:

输入: [0,0,1,2,5]
输出: True
 */

var isStraight = function(nums) {
  const arr = new Array(14).fill(0)
  let max = -1
  let min = 14
  for(const item of nums){
      if(item === 0) continue
      // 如果有重复，肯定寄
      if(arr[item] !== 0) return false
      arr[item]++
      max = Math.max(max,item)
      min = Math.min(min,item)
  }
  // 在没有重复的前提下
  // 如果没有0，那么最大值和最小值的差为4
  // 如果有0，那么差小于等于4
  return max - min <= 4
};