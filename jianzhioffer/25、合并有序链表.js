/**
 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

 */
var mergeTwoLists = function (l1, l2) {
  let p = new ListNode();
  const res = p;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      p.next = l2;
      l2 = l2.next;
    } else {
      p.next = l1;
      l1 = l1.next;
    }
    p = p.next;
  }
  while (l1) {
    p.next = l1;
    l1 = l1.next;
    p = p.next;
  }
  while (l2) {
    p.next = l2;
    l2 = l2.next;
    p = p.next;
  }
  return res.next;
};
