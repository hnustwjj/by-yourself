// https://leetcode.cn/problems/trapping-rain-water/

var trap = function(height) {
  let left = 0
  let right = height.length - 1
  // 标记遍历时的左右最高点
  let leftMax = 0
  let rightMax = 0
  let res = 0
  while(left < right){
      // 更新左右最高点
      leftMax = Math.max(leftMax,height[left])
      rightMax = Math.max(rightMax,height[right])
      // leftMax和rightMax中间接雨水
      // 当前边界（left or right）要接的水只能汇聚到矮的那一边，
      if(leftMax < rightMax){
          res += leftMax - height[left++]
      }else{
          res += rightMax - height[right--]
      }
  }
  return res
};