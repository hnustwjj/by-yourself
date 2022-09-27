// 维护长度为k的最大堆，如果当前数比最大堆的堆顶小，就将堆顶弹出，并且插入这个数
var getLeastNumbers = function (arr, k) {
  // 最小堆
  const heap = [];
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // 维护一个堆，执行五次heapify操作即可
  function heapInsert(number) {
    heap.push(number);
    let child = heap.length - 1;
    let parent = ~~((child - 1) / 2);
    while (heap[child] < heap[parent]) {
      swap(heap, child, parent);
      child = parent;
      parent = ~~((child - 1) / 2);
    }
  }
  function heapify() {
    swap(heap, 0, heap.length - 1);
    const res = heap.pop();
    let parent = 0;
    let child = 1;
    while (child < heap.length) {
      if (child + 1 < heap.length && heap[child + 1] < heap[child]) child++;
      if (heap[parent] > heap[child]) {
        swap(heap, parent, child);
        parent = child;
        child = parent * 2 + 1;
      } else {
        break;
      }
    }
    return res;
  }

  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr[i]);
  }
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(heapify());
  }
  return res;
};
