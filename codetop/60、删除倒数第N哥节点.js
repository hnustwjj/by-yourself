// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

// 快慢指针
var removeNthFromEnd = function (head, n) {
  let res = head
  let slow = head
  let fast = head
  while (n-- && fast) {
    fast = fast.next
  }
  let pre = null
  while (fast) {
    fast = fast.next
    pre = slow
    slow = slow.next
  }
  if (pre) {
    pre.next = slow.next
    return res
  } else {
    // 如果pre为空，说明第二个while循环没有执行，也就是说要删除的是第一个节点（因为fast走到最后了）
    return res.next
  }
}
