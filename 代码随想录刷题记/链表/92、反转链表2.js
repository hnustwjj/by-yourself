/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * [1,2,3,4,5] 2 4
 * [1,4,3,2,5]
 */
var reverseBetween = function (head, left, right) {
  // 防止单个节点的情况
  let fake = new ListNode();
  fake.next = head;

  let pre = fake; // slow的前一个
  let slow = head; // slow
  let fast = head; // fast
  let cnt = right - left; 
  // 先让fast走cnt步骤
  while (cnt && fast) {
    fast = fast.next;
    cnt--;
  }
  cnt = 1;
  // 再让三个指针走剩下的步骤
  while (cnt !== left) {
    cnt++;
    slow = slow.next;
    fast = fast.next;
    pre = pre.next;
  }
  const next = fast.next;
  // 此时 slow = 2 .  fast = 4 . pre = 1 . next = 5  

  // 进行slow到fast的反转链表
  let fakepre = null;
  let idx = slow;
  while (idx !== next) {
    const next = idx.next;
    idx.next = fakepre;
    fakepre = idx;
    idx = next;
  }

  // 反转完之后进行拼接
  pre.next = fast;
  slow.next = next;
  return fake.next;
};
