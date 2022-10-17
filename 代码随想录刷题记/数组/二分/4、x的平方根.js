/**
 https://leetcode.cn/problems/sqrtx/
 */

 // 用闭区间找到小于等于i的最左侧的值
 // 再进行判断，是否要对i进行-1操作
 var mySqrt = function(x) {
  // 找到n的i次第一个小于等于x的i的数
  // 如果是等于i，就直接返回i，如果不等于就返回i-1
  let left = 0
  let right = 2 ** 30 - 1 
  while(left <= right){
      const mid = ~~((left+right)/2)
      if(mid**2 >= x){
          right = mid - 1
      }else{
          left = mid + 1
      }
  }
  return left ** 2 === x ? left : left-1
};