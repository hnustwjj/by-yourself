// https://leetcode.cn/problems/swap-nodes-in-pairs/submissions/

// 思路，用一个pre来记录前面的结点，每交换完两个，将交换后的两个拼接到pre中
var swapPairs = function (head) {
  // 空链表
  if (!head) return null
  // 只有一个节点的链表
  if (head && !head.next) return head

  let slow = head
  let fast = head.next
  const res = fast
  let pre = new ListNode(-1)
  while (slow && fast) {
    const next = fast.next
    slow.next = next
    fast.next = slow

    // 拼接到新的链表中
    pre.next = fast
    // 更新pre
    pre = slow

    slow = slow.next
    fast = next?.next
  }
  return res
}
