/**
  记录pre和now，每次进行重新指向，当now为空的时候退出，那么pre就是返回值，也就是新的链表头
 */
var reverseList = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  let pre = null;
  let now = head;
  while (now) {
    const next = now.next;
    now.next = pre;
    pre = now;
    now = next;
  }
  return pre;
};


// 递归写法
var reverse = function (pre, head) {
  if (!head) return pre;
  const temp = head.next;
  head.next = pre;
  pre = head;
  return reverse(pre, temp);
};

var reverseList = function (head) {
  return reverse(null, head);
};
