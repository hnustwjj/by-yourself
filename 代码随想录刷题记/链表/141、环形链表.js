var hasCycle = function(head) {
  // 初始情况判断
  if(!head || !head.next) return false
  let slow = head
  let fast = head
  // 因为每次快指针要走两步，所以进行判断，如果因为这个退出了while循环，说明不会有环
  while(fast && fast.next){
      slow = slow.next
      fast = fast.next.next
      // 没走一步都进行判断
      if(slow === fast) return true
  }
  return false
};