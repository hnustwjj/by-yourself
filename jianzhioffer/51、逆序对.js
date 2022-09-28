// 其实可以看到，就是在归并排序的时候判断大小，然后进行一个加法
// 相比归并排序，就加了两行代码：5、23
var reversePairs = function (nums) {
  if (nums.length === 0) return 0;
  let count = 0;
  function sort(arr) {
    if (arr.length === 1) return arr;
    const mid = ~~(arr.length / 2);
    const left = sort(arr.slice(0, mid));
    const right = sort(arr.slice(mid));
    return merge(left, right);
  }
  sort(nums);
  function merge(arr1, arr2) {
    let idx1 = 0;
    let idx2 = 0;

    const res = [];

    while (idx1 < arr1.length && idx2 < arr2.length) {
      // 如果前面的大于后面的
      if (arr1[idx1] > arr2[idx2]) {
        count += arr1.length - idx1;
        res.push(arr2[idx2++]);
      } else {
        res.push(arr1[idx1++]);
      }
    }

    while (idx1 < arr1.length) res.push(arr1[idx1++]);
    while (idx2 < arr2.length) res.push(arr2[idx2++]);
    return res;
  }
  return count;
};
