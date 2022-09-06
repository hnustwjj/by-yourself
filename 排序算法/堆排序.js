let arr = [6, 5, 4, 4, 3, 2, 1, 0, -1, 8];

/**
  堆排序的核心就是，将原数组作为堆，不断的扩大堆的大小（从0开始将元素入堆）
  建成堆之后，每次弹出（交换）堆顶元素到数组末尾，并且减小堆的大小，进行heapify操作
 */

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 数组的第index位置入堆
function heapInsert(arr, index) {
  //如果index是0位置，那么父亲计算之后也是-0，自己跟自己比也会退出循环
  while (arr[index] > arr[parseInt((index - 1) / 2)]) {
    swap(arr, index, parseInt((index - 1) / 2));
    index = Math.floor((index - 1) / 2);
  }
}

// 从上往下进行heapify操作
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;
  //如果左孩子在堆中
  while (left < heapSize) {
    //如果右孩子在堆中，且值更大，就把下标给largest
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;

    //取出了下标大的孩子的时候，跟父亲index进行比较，如果大就交换，否则就break
    if (arr[index] < arr[largest]) {
      swap(arr, index, largest);
      index = largest;
      //重新计算左孩子
      left = index * 2 + 1;
    } else {
      break;
    }
  }
}

function heapSort(arr) {
  if (!arr || arr.length < 2) return;
  // 不断叉入堆
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }
  let heapSize = arr.length;

  //将第一个放到heap最后，并且减一，开始不断将堆顶元素放入最后，并且减少堆的大小
  swap(arr, 0, --heapSize);
  //执行heapify操作，
  while (heapSize > 0) {
    heapify(arr, 0, heapSize);
    swap(arr, 0, --heapSize);
  }
}
heapSort(arr);
console.log(arr);
