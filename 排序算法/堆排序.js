let arr = [6, 5, 4, 4, 3, 2, 1, 0, -1, 8]

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function heapInsert(arr, index) {
  let parentIndex = parseInt((index - 1) / 2)
  //如果index是0位置，那么父亲计算之后也是-0，自己跟自己比也会退出循环
  while (arr[index] > arr[parentIndex]) {
    swap(arr, index, parentIndex)
    index = parentIndex
  }
}

function heapify(arr, index, heapSize) {
  let left = index * 2 + 1
  //如果左孩子在堆中
  while (left < heapSize) {
    //如果右孩子在堆中，且值更大，就把下标给largest
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left

    //取出了下标大的孩子的时候，跟父亲index进行比较，如果大就交换，否则就break
    if (arr[index] < arr[largest]) {
      swap(arr, index, largest)
      index = largest
      //重新计算左孩子
      left = index * 2 + 1
    } else {
      break
    }
  }
}

function heapSort(arr) {
  if (!arr || arr.length < 2) return
  // 不断叉入堆
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i)
  }
  let heapSize = arr.length
  //将第一个放到heap最后，并且减一，
  swap(arr, 0, --heapSize)
  //执行heapify操作，
  while (heapSize > 0) {
    heapify(arr, 0, heapSize)
    //执行完heapify之后，继续将头位置放到heap最后，并且减一
    swap(arr, 0, --heapSize)
  }
}
heapSort(arr)
console.log(arr)
