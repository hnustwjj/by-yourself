/**
  给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
  子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
  输入：nums = [10,9,2,5,3,7,101,18]
  输出：4
  
  定义：
    dp[i]的寓意是，[0,i]的最长递增子序列长度
  
  初始化：
    dp[i] = 1，因为每一个都可以以自身为最长递增子序列

  遍历：
    需要进行二维遍历，遍历第i个的时候，从j = [0,i-1]里找到比 nums[i] 小的 dp[j] 的对应最长递增子序列的最大值 + 1即可
 */


var lengthOfLIS = function (nums) {
  let res = 1;
  let dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        res = Math.max(res, dp[i]);
      }
    }
  }
  return res;
};
