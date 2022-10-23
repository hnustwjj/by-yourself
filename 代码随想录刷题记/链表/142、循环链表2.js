/**

 */

var detectCycle = function (head) {
  // 初始情况判断
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head;
  // 如果有环，就让fast重新指向head，开始一步一步走
  let f = false;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // 没走一步都进行判断
    if (slow === fast) {
      f = true;
      break;
    }
  }
  if (f) {
    fast = head;
    while (fast !== slow) {
      fast = fast.next;
      slow = slow.next;
    }
    return fast;
  }
  return null;
};



// 也可以用set集合来进行判断
 var detectCycle = function(head) {
  const set = new Set()
  while(head){
      if(set.has(head)) return head
      set.add(head)
      head = head.next
  }
  return null
};


// 甚至可以用hack的手段（但是它只能用来判断）
var detectCycle = function(head) {
  let flag = false
  try {
    JSON.stringify(head)
  } catch (error) {
    flag = true
  }
  return flag
};