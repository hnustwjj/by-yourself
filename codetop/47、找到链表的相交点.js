// https://leetcode.cn/problems/intersection-of-two-linked-lists/

//那么我们有两种做法
// 对于链表a : 1 -> 2 - > 5, 链表b : 4 -> 3 -> 2 -> 5

// 我们可以将两个链表都变成一样长
// a : 1 -> 2 -> 5 -> 4 -> 3 -> 2 -> 5       null(同时为空)
// b : 4 -> 3 -> 2 -> 5 -> 1 -> 2 -> 3       null
// 遍历到第一个相同的节点，就是相交的节点

// 或者我们可以先遍历一遍，记录链表的长度，用快慢指针让长链表先走差值步，然后找到相交点，没有就是null

var getIntersectionNode = function (headA, headB) {
  let a = headA
  let b = headB
  while (a !== b) {
    a = !a ? headB : a.next  //如果a存在，就next，否则就切换到B
    b = !b ? headA : b.next
  }
  // 最后退出的情况，要么是a === b === nul，要么就是他们相同的地方
  return a
}
