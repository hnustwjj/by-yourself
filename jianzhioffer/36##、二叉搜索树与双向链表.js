const root = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: { val: 5, left: null, right: null },
};

// 根据递归的语义，确定要做的事情
// 传入root，返回链表的最小结点
// 那么我们就可以根据这个语义，先返回左侧的循环链表，再返回右侧的循环链表，再进行合并
var treeToDoublyList = function (root) {
  if (!root) return null;
  let leftHead = treeToDoublyList(root.left);
  let rightHead = treeToDoublyList(root.right);
  let leftTail;
  let rightTail;
  // 如果左循环链表存在，将左链表拼接到root
  if (leftHead) {
    // 左尾巴是左头的左指针
    leftTail = leftHead.left;
    root.left = leftTail;
    leftTail.right = root;
  } else {
    // 不要忘了处理空值
    leftHead = root;
    leftTail = root;
  }

  if (rightHead) {
    rightTail = rightHead.left;
    root.right = rightHead;
    rightHead.left = root;
  } else {
    rightHead = root;
    rightTail = root;
  }

  // 拼接链表的头尾
  leftHead.left = rightTail;
  rightTail.right = leftHead;
  return leftHead;
};

treeToDoublyList(root);
