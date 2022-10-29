/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  if(!head || !head.next) return head
  const other = swapPairs(head.next.next)
  let now = head
  let next = head.next
  next.next = now
  now.next = other
  return next
};