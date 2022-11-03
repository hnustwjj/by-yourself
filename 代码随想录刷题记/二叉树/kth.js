/**
  给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
  请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
  你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

  输入: [3,2,1,5,6,4], k = 2
  输出: 5

  输入: [3,2,3,1,2,4,5,5,6], k = 4
  输出: 4
 */
function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

// 使用双指针进行partition
function partition(nums, l, r) {
  // [0+l,r-l+l] = [l,r]
  const splitIdx = ~~(Math.random() * (r - l + 1)) + l;
  const splitNum = nums[splitIdx];
  let left = l - 1; // 小于区域
  let right = r; // 大于区域
  // 将划分值挪到最后
  swap(nums, splitIdx, r);
  let idx = l;
  // 只有当idx小大于区域的时候才说明还有内容需要分配
  while (idx < right) {
    if (nums[idx] === splitNum) idx++;
    // 如果是第k小数，就只需要改这里的逻辑就可以了（<,>号）
    else if (nums[idx] < splitNum) swap(nums, idx, --right);
    else swap(nums, idx++, ++left);
  }
  swap(nums, r, right);
  // 等于区域的下标
  return [left + 1, right];
}

partition([1, 1, 1, 1, 1, 4, 2], 0, 6);
var findKthLargest = function (nums, k) {
  // 第k大数就是在k-1位置上的
  const kth = k - 1

  const [l, r] = partition(nums, 0, nums.length - 1);
  // 如果在等于区域，那么就直接返回
  if (kth >= l && kth <= r) return nums[kth];
  // 如果在小于区域
  if (kth < l) {
    return findKthLargest(nums.slice(0, l), k);
  } else {
    // r是下标，真实的长度是r+1
    return findKthLargest(nums.slice(r + 1), k - r - 1);
  }
};

