// https://leetcode.cn/problems/merge-two-sorted-lists/

// 没啥好说的....不要忘记遍历剩下的就好了= =、
var mergeTwoLists = function (list1, list2) {
  let left = list1;
  let right = list2;
  let fake = new ListNode();
  let res = fake;
  while (left && right) {
    if (left.val < right.val) {
      res.next = left;
      left = left.next;
    } else {
      res.next = right;
      right = right.next;
    }
    res = res.next;
  }
  
  while (left) {
    res.next = left;
    left = left.next;
    res = res.next;
  }
  while (right) {
    res.next = right;
    right = right.next;
    res = res.next;
  }
  return fake.next;
};
