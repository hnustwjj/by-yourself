function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function isLarger(a, b, cb = (a, b) => a - b) {
  if (cb(a, b) > 0) {
    return true //a>b
  } else {
    return false
  }
}
function priority_queue(arr, cb = (a, b) => a - b) {
  this.arr = arr
  function push(item) {
    arr.push(item)
    let index = arr.length - 1
    let parentIndex = ~~((index - 1) / 2)
    //如果index是0位置，那么父亲计算之后也是-0，自己跟自己比也会退出循环
    while (cb(arr[index], arr[parentIndex]) > 0) {
      swap(arr, index, parentIndex)
      index = parentIndex
      parentIndex = ~~((index - 1) / 2)
    }
  }

  function pop() {
    swap(arr, 0, arr.length - 1)
    // 删除并获取数组的第一个元素，也就是堆顶
    const res = arr.pop()
    let parent = 0
    let left = 1
    const heapSize = arr.length
    // 如果左孩子在堆中
    while (left < heapSize) {
      // 如果右孩子在堆中，且值更大，就把下标给largest
      const largest =
        left + 1 < heapSize && isLarger(arr[left + 1], arr[left], cb)
          ? left + 1
          : left
      // 取出了下标大的孩子的时候，跟父亲比较，如果父亲大就break，否则就交换
      if (isLarger(arr[largest], arr[parent], cb)) {
        swap(arr, parent, largest)
        parent = largest
        //重新计算左孩子
        left = parent * 2 + 1
      } else {
        break
      }
    }
    return res
  }

  function isEmpty() {
    return arr.length === 0
  }

  return { arr, push, pop, isEmpty }
}

const q = new priority_queue([])
q.push(1)
q.push(2)
q.push(0)
q.push(4)
console.log(q)
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())