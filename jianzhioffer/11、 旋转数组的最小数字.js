/**
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。
请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  

注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

 

示例 1：

输入：numbers = [3,4,5,1,2]
输出：1
示例 2：

输入：numbers = [2,2,2,0,1]
输出：0

 */
// 题目看错了，升序数组，只翻转一次
var minArray = function (numbers) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    // 如果右侧是递增的，那么分界点就在左侧
    if (numbers[mid] < numbers[high]) {
      high = mid;

      // 如果右侧是递减的，那么分界点就在右侧
    } else if (numbers[mid] > numbers[high]) {
      low = mid + 1;
    } else {
      // 无法确定，high--
      high -= 1;
    }
  }
  return numbers[low];
};
