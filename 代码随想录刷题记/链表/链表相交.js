/**
   判断链表是否有相交的节点，只需要将这两条链表长度变为一样即可
   每次进行节点跳过的时候，判断是否存在，如果是undefined了，就转而去另一条链表上开始遍历
   到最后如果都没有找到相同的，也会因为同时为undefined而推出循环
 */

 var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null
  let a = headA
  let b = headB
  while(a !== b){
      a = !a ? headB : a.next
      b = !b ? headA : b.next
  }
  return a
};
