/**
  定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
   
*/
var reverseList = function (head) {
  let fake = null;
  let pre = fake;
  let now = head;
  while (now) {
    let next = now.next;
    now.next = pre;
    pre = now;
    now = next;
  }
  return pre;
};
