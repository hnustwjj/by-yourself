// https://leetcode.cn/problems/add-two-numbers/

// 就双向链表，简单的
var addTwoNumbers = function (l1, l2) {
  let fake = new ListNode()
  const res = fake
  let jinwei = 0
  while (l1 && l2) {
    const sum = jinwei + l1.val + l2.val
    jinwei = ~~(sum / 10)
    fake.next = new ListNode(sum % 10)
    fake = fake.next
    l1 = l1.next
    l2 = l2.next
  }

  while (l1) {
    const sum = jinwei + l1.val
    jinwei = ~~(sum / 10)
    fake.next = new ListNode(sum % 10)
    fake = fake.next
    l1 = l1.next
  }

  while (l2) {
    const sum = jinwei + l2.val
    jinwei = ~~(sum / 10)
    fake.next = new ListNode(sum % 10)
    fake = fake.next
    l2 = l2.next
  }

  if (jinwei !== 0) fake.next = new ListNode(jinwei)
  return res.next
}
