let arr = [6, 5, 4, 4, 3, 2, 1, 0, 8];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 划分为大于，小于，等于区，返回等于区的区间
function partition(arr, l, r) {
  let less = l - 1; //小于区的右边界
  let more = r; // 大于区的左边界，
  const target = arr[r];
  // 条件判断
  while (l < more) {
    if (arr[l] < target) swap(arr, l++, ++less);
    else if (arr[l] > target) swap(arr, l, --more);
    else l++;
  }
  swap(arr, more, r); // 最后将划分值与大于区的左边界划分，那么原来的more就是等于区的右边界了
  return [less + 1, more];
}
// 快排2.0，默认最后一个是划分值，划分大于小于等于区域
function quickSort2(arr, l, r) {
  if (l < r) {
    const [less, more] = partition(arr, l, r);
    // 对小于区和大于区继续进行操作
    quickSort2(arr, l, less - 1);
    quickSort2(arr, more + 1, r);
    return arr;
  }
}
const arr1 = [3, 5, 2, 4, 1, 6, 7, 9, 8];
console.log(quickSort2(arr1, 0, arr1.length - 1));
