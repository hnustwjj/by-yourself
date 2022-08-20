// https://leetcode.cn/problems/intersection-of-two-arrays/

var intersection = function (nums1, nums2) {
  const arr = [...new Set([...nums1, ...nums2])]
  return arr.filter(i => nums1.indexOf(i) !== -1 && nums2.indexOf(i) !== -1)
}
const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]
console.log(intersection(nums1, nums2))
