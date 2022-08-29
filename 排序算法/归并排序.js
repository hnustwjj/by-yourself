// 左侧有序，右侧有序，合并
// sort的语义是让l-r的部分有序
function sort(arr, l, r) {
  // 那么我们只需要让左侧有序，让右侧有序，然后合并即可
  //如果l和r一样，返回
  if (l === r) return
  let middle = l + ((r - l) >> 1)
  mergeSort(arr, l, middle)
  mergeSort(arr, middle + 1, r)
  //将左右侧有序的部分合并成一个部分
  merge(arr, l, middle, r)
}

function merge(arr, L, M, R) {
  let arr2 = new Array(R - L + 1)
  let i = 0
  let p1 = L
  let p2 = M + 1
  while (p1 <= M && p2 <= R) {
    //这里的判断决定了是升序还是降序（大的线插进去还是小的先插进去）
    arr2[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= M) arr2[i++] = arr[p1++]
  while (p2 <= R) arr2[i++] = arr[p2++]
  for (i = 0; i < arr2.length; i++) {
    //注意，是将L到R部分更新，arr[i+L]
    arr[i + L] = arr2[i]
  }
}

mergeSort(arr, 0, arr.length - 1)
console.log(arr)
