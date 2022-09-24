/**
剑指 Offer 06. 从尾到头打印链表
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
 */

var reversePrint = function (head) {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res.reverse();
};
