// TODO: 晚上写，复习一下partition
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function partition(arr, left, right) {
  const splitNum = arr[right];
  let l = left - 1; // 小于区域的右边界
  let r = right; //大于区域的左边界
  let idx = left;
  while (idx < r) {
    if (arr[idx] === splitNum) idx++;
    else if (arr[idx] > splitNum) swap(arr, idx, --r);
    // 换到大于区的下一个位置，idx不能扩充，因为不知道换过来的数是不是小于等于
    else swap(arr, idx++, ++l); // 换到小于区的下一个位置，并且扩充idx
  }
  swap(arr, r, right);
  return [l + 1, r];
}

function sort(arr, l, r) {
  // 判断
  if(l < r){
    const [left, right] = partition(arr, l, r);
    sort(arr, l, left - 1);
    sort(arr, right + 1, r);
    return arr;
  }

}

console.log(sort([1, 3, 2, 4, 1, 5, 2], 0, 6));
