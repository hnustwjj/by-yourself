/**
  给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
  请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
  你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

  输入: [3,2,1,5,6,4], k = 2
  输出: 5

  输入: [3,2,3,1,2,4,5,5,6], k = 4
  输出: 4
 */
function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

// 使用双指针进行partition
function partition(nums, l, r) {
  // [0+l,r-l+l] = [l,r]
  const splitIdx = ~~(Math.random() * (r - l + 1)) + l;
  const splitNum = nums[splitIdx];
  let left = l - 1; // 小于区域
  let right = r; // 大于区域
  // 将划分值挪到最后
  swap(nums, splitIdx, r);
  let idx = l;
  // 只有当idx小大于区域的时候才说明还有内容需要分配
  while (idx < right) {
    if (nums[idx] === splitNum) idx++;
    // 如果是第k小数，就只需要改这里的逻辑就可以了（<,>号）
    else if (nums[idx] < splitNum) swap(nums, idx, --right);
    else swap(nums, idx++, ++left);
  }
  swap(nums, r, right);
  // 等于区域的下标
  return [left + 1, right];
}

partition([1, 1, 1, 1, 1, 4, 2], 0, 6);
var findKthLargest = function (nums, k) {
  // 第k大数就是在k-1位置上的
  const kth = k - 1

  const [l, r] = partition(nums, 0, nums.length - 1);
  // 如果在等于区域，那么就直接返回
  if (kth >= l && kth <= r) return nums[kth];
  // 如果在小于区域
  if (kth < l) {
    return findKthLargest(nums.slice(0, l), k);
  } else {
    // r是下标，真实的长度是r+1
    return findKthLargest(nums.slice(r + 1), k - r - 1);
  }
};




//  第k大数，就是维护k个长度的优先队列，如果长度超过k，就将队首弹出进行heapify操作
 var KthLargest = function(k, nums) {
  this.k = k
  this.minHeap = new MinHeap(nums)
};

KthLargest.prototype.add = function(val) {
  this.minHeap.offer(val)
  while(this.minHeap.size() > this.k){
      this.minHeap.poll()
  }
  return this.minHeap.peek()
};

class MinHeap {
constructor(data = []) {
  this.data = data;
  this.comparator = (a, b) => a - b;
  this.heapify();
}

heapify() {
  if (this.size() < 2) return;
  for (let i = 1; i < this.size(); i++) {
    this.bubbleUp(i);
  }
}

// 队顶
peek() {
  if (this.size() === 0) return null;
  return this.data[0];
}

// 入队
offer(value) {
  this.data.push(value);
  this.bubbleUp(this.size() - 1);
}

// 出队
poll() {
  if (this.size() === 0) {
    return null;
  }
  const result = this.data[0];
  const last = this.data.pop();
  if (this.size() !== 0) {
    this.data[0] = last;
    this.bubbleDown(0);
  }
  return result;
}

// 向上执行heapInsert操作
bubbleUp(index) {
  while (index > 0) {
    const parentIndex = (index - 1) >> 1;
    if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
      this.swap(index, parentIndex);
      index = parentIndex;
    } else {
      break;
    }
  }
}

// 向下执行heapify操作
bubbleDown(index) {
  const lastIndex = this.size() - 1;
  while (true) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    let findIndex = index;
    if (
      leftIndex <= lastIndex &&
      this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
    ) {
      findIndex = leftIndex;
    }
    if (
      rightIndex <= lastIndex &&
      this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
    ) {
      findIndex = rightIndex;
    }
    if (index !== findIndex) {
      this.swap(index, findIndex);
      index = findIndex;
    } else {
      break;
    }
  }
}

swap(index1, index2) {
  [this.data[index1], this.data[index2]] = [
    this.data[index2],
    this.data[index1],
  ];
}

size() {
  return this.data.length;
}
}
