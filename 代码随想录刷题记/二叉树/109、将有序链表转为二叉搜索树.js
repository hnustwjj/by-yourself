var sortedListToBST = function(head) {
  // 条件判断
  if(!head) return null
  if(!head.next) return new TreeNode(head.val)

  const start = head
  // 用于断开前半段链表
  let pre = new ListNode()
  pre.next = head

  // 快慢指针找中点
  let fast = head
  let slow = head
  while(fast && fast.next){
      fast = fast.next.next
      slow = slow.next
      pre = pre.next
  }
  // 断开前半段
  pre.next = null
  // 保存后半段
  const next = slow.next
  // 断开后半段
  slow.next = null
  // 创建左右子树
  const node = new TreeNode(slow.val)
  const left = sortedListToBST(start)
  const right = sortedListToBST(next)
  node.left = left
  node.right = right
  return node
};