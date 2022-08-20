// https://leetcode.cn/problems/next-permutation/

// 452631
// 453126
// 从后往前找到第一个逆序的数（2），下标为2，与从后往前第一个大于他的数（3）交换
// 然后将下标为2后面的内容进行翻转（总之就是让后面的这一段能组成的数最小）

var nextPermutation = function (nums) {
  // 标记从后往前的第一个逆序数
  let index = nums.length - 1
  while (index > 0 && nums[index - 1] >= nums[index]) {
    index--
  }
  if (index === 0) {
    nums.reverse()
    return
  }
  index--

  // 标记从后往前第一个大于逆序数的数
  let i = nums.length - 1
  while (i > index && nums[i] <= nums[index]) {
    i--
  }

  // 交换
  ;[nums[index], nums[i]] = [nums[i], nums[index]]

  // 翻转
  let left = index + 1
  let right = nums.length - 1
  while (left < right) {
    ;[nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
}

console.log(nextPermutation([3, 2, 1]))
