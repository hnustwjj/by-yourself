class Heap {
  heap = []
  constructor(compare = (a, b) => a - b) {
    this.compare = compare
  }
  static swap(arr, i, j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  insert(item) {
    const arr = this.heap
    arr.push(item)
    let child = arr.length - 1
    let parent = ~~((child - 1) / 2)
    while (parent >= 0 && this.compare(arr[child], arr[parent]) > 0) {
      Heap.swap(arr, child, parent)
      child = parent
      parent = (child - 1) >> 1
    }
  }

  pop() {
    const arr = this.heap
    if (arr.length === 0) return null
    Heap.swap(arr, 0, arr.length - 1)
    const res = arr.pop()
    let parent = 0
    let child = 1
    while (child < arr.length) {
      // 如果有右孩子，且右孩子大于左孩子，则选择右孩子
      if (
        child + 1 < arr.length &&
        this.compare(arr[child + 1], arr[child]) > 0
      ) {
        child++
      }
      // 如果父节点小于孩子节点，则交换，否则退出
      if (this.compare(arr[child], arr[parent]) > 0) {
        Heap.swap(arr, parent, child)
        parent = child
        child = parent * 2 + 1 //默认是左孩子
      } else {
        break
      }
    }
    return res
  }

  top() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

const heap = new Heap()
heap.insert(1)
console.log(heap.heap)
heap.insert(2)
console.log(heap.heap)
heap.insert(3)
console.log(heap.heap)
heap.insert(2)
console.log(heap.heap)
heap.insert(2)
console.log(heap.heap)
heap.insert(0)
console.log(heap.heap)
heap.insert(-1)
console.log(heap.heap)

console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
