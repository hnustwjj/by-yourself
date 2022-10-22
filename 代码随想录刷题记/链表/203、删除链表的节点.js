// 新建一个节点是为了防止第一个节点就要删除的情况



var removeElements = function (head, val) {
  const ret = new ListNode(0, head);
  let cur = ret;
  // 判断当前节点是否存在
  while (cur.next) {
    // 如果当前节点存在，并且等于下一个
    // 就断开链表指向下一个
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      // 删除了当前节点（cur.next）之后并不能跳过cur.next，因为不知道下一个节点是不是等于val
      continue;
    }
    // 移动到下一个
    cur = cur.next;
  }
  return ret.next;
};


var removeElements = function(head, val) {
  if(!head) return null
  const res = new ListNode()
  res.next = head
  let pre = res
  let now = head
  // 不断的更新now
  // pre.next是记录要删除的节点
  while(now){
      const next = now.next
      // 如果要删除，就不更新pre，因为无法保证下一个pre.next，也就是now是不是等于val的
      // 可以想像，后面的内容往前面压，前面的指针不变
      if(now.val === val){
          pre.next = next
      }else{
          pre = now            
      }
      now = next
  }
  return res.next
};