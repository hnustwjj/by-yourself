var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

var reverseWords = function (s) {
  const res = [];
  let str = "";
  s = s.trim();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && str.length !== 0) {
      res.push(str);
      str = "";
    } else if (s[i] !== " ") {
      str += s[i];
    }
  }
  if (str.length) res.push(str);
  let resStr = "";
  while (res.length) {
    resStr += res.pop();
    if (res.length) resStr += " ";
  }
  return resStr;
};
