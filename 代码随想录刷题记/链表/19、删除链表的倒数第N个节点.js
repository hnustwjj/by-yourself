/**
新建一个ListNode是为了防止删除第一个的情况
 */
 var removeNthFromEnd = function(head, n) {
  const ret = new ListNode()
  ret.next = head
  let slow = ret
  let fast = ret
  // 快指针先走n步
  while(fast && n){
      fast = fast.next
      n--
  }
  // 如果为空，则说明长度不够，返回head
  if(!fast) return head
  // 否则就一起走
  while(fast.next){
      fast = fast.next
      slow = slow.next
  }
  // 此时fast是最后一个节点，那么slow.next就是我们要删除的节点
  slow.next = slow.next.next
  return ret.next
};