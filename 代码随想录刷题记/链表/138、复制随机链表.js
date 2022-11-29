var copyRandomList = function (head) {
  let map = new Map();
  let p = head;
  let newHead;
  while (p) {
    newHead = getCloneNode(p, map);
    if (p.random) newHead.random = getCloneNode(p.random, map);
    if (p.next) newHead.next = getCloneNode(p.next, map);
    p = p.next;
  }
  return map.get(head);
};

function getCloneNode(node, visited) {
  if (!node) {
    return null;
  }
  if (visited.has(node)) {
    return visited.get(node);
  }
  let newNode = new Node(node.val);
  visited.set(node, newNode);
  return visited.get(node);
}

// 这种解法为啥不行？无法理解
var copyRandomList = function(head) {
  if(!head) return null
  const map = new Map()
  let cur = head
  while(cur){
      map.set(cur,new Node(cur.val))
      cur = cur.next
  }
  cur=head;
  while(cur){
      map.get(cur).next = map.get(cur.next);
      map.get(cur).random = map.get(cur.random);
      cur = cur.next;
  }
  return map.get(head);
};