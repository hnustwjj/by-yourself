let arr = [6, 5, 4, 4, 3, 2, 1, 0, 8]

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quickSort(arr, l, r) {
  //一定要判断！
  if (l < r) {
    //生成[l...r]的随机数
    let randomNum = Math.floor(Math.random() * (r - l + 1)) + l
    //与最后一个做交换，因为要将这个随机的数作为划分值
    swap(arr, randomNum, r)
    //划分三个区域，返回值是等于区域的左右边界
    let p = partition(arr, l, r)
    //对左侧和右侧继续进行相同操作
    quickSort(arr, l, p[0] - 1)
    quickSort(arr, p[1] + 1, r)
  }
}

// partition，规定最后一个值为划分值
function partition(arr, l, r) {
  //先将l...r-1部分分为三个部分：
  let less = l - 1 //小于划分值部分的右边界
  let more = r //大于划分值部分的左边界
  while (l < more) {
    //小于划分值，放到小于区域，l移动到下一位
    if (arr[l] < arr[r]) swap(arr, ++less, l++)
    //大于划分值，把当前值放到大于区域，l不变（因为交换过来的可能会是小于划分值的数）
    else if (arr[l] > arr[r]) swap(arr, --more, l)
    //等于划分值，跳过
    else l++
  }
  //然后再做交换
  swap(arr, more, r)
  // 返回等于区的区间
  return [less + 1, more]
}
quickSort(arr, 0, arr.length - 1)
console.log(arr)
