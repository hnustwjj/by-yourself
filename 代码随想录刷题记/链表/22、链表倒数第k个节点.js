// https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
var getKthFromEnd = function (head, k) {
  let slow = head
  let fast = head
  while (fast && k) {
    fast = fast.next
    k--
  }
  // 如果k还有，说明链表长度小于k
  if (k) return null
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}
