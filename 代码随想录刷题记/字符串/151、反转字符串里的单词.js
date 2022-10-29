/**
  用栈进行存储，倒叙
  看到一句话说的很对，如果要实现逆序，不妨思考一下栈的方式
 */
var reverseWords = function (s) {
  const stack = [];
  s = s.trim() + " ";
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") str += s[i];
    else {
      if (str.length) stack.push(str);
      str = "";
    }
  }

  let res = "";
  while (stack.length) {
    const item = stack.pop();
    res += item;
    if (stack.length !== 0) {
      res += " ";
    }
  }
  return res;
};
