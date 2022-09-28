//其实就是将两条链表合并成一条
// A -> B
// B -> A
// 这样的话，两条链表长度一样
// 如果遍历到最后都找不到相同的，就说明while循环是因为两者同时等于null导致的
var getIntersectionNode = function (headA, headB) {
  let idxA = headA;
  let idxB = headB;
  if (!idxA || !idxB) return null;
  while (idxA !== idxB) {
    // 判断当前是否是null，是的话就切换成另一个链表的头结点
    idxA = idxA === null ? headB : idxA.next;
    idxB = idxB === null ? headA : idxB.next;
  }
  return idxA;
};
