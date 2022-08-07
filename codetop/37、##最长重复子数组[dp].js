// https://leetcode.cn/problems/maximum-length-of-repeated-subarray/

var findLength = function (nums1, nums2) {
  const m = nums1.length,
    n = nums2.length
  // dp[i][j]表示的是，以nums1的第i个数为结尾的子数组，与nums2以第j个数为子数组的相同的最长子数组长度
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 如果当前第i个，第j个位置的元素一样
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1 // 那么就更新，是它前一位的+1，这里不需要判断前一位是否相同，因为初值是0
      }
      res = Math.max(res, dp[i][j])
    }
  }
  return res
}

/**
    
    nums1: [1,2,3,2,1]
    nums2: [3,2,1,4,7]
    [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 1, 0, 0 ],
      [ 0, 0, 1, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 0, 0, 2, 0, 0, 0 ],
      [ 0, 0, 0, 3, 0, 0 ]
    ]
 */
