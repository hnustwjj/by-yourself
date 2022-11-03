const obj = {
  a: {
    b: 123,
  },
  arr: [
    {
      demo: "demo",
    },
  ],
};
function getKey(obj, str) {
  const arr = str.split(".");
  function dfs(obj, arr) {
    if (arr.length === 0) return undefined;
    // 每次弹出一个要查找的项
    const substr = arr.shift();

    let idx = substr.indexOf("[");
    // 如果是数组
    if (idx !== -1) {
      let num = 0; //保存下标
      // 先越过[
      idx++;
      while (substr[idx] !== "]") num = num * 10 + +substr[idx++];
      // 找到是从那个数组中取值
      const raw = substr.split("[")[0];
      // 判断
      if (arr.length === 0) return obj[raw][idx];
      return dfs(obj[raw][num], arr);
    } else {
      // 判断
      if (arr.length === 0) return obj[substr];
      return dfs(obj[substr], arr);
    }
  }
  return dfs(obj, arr);
}

function getKey(obj, str) {
  str = str.split(".");
  let len = str.length;
  // 遍历每个条件
  for (let i = 0; i < len; i++) {
    if (str[i] && str[i].indexOf("[") !== -1) {
      let index = str[i].match(/\[(\d+)\]/)[1];
      let name = str[i].split("[")[0];
      // 找不到就返回undefined，否则就更新obj
      if (name in obj) {
        obj = obj[name][index];
      } else {
        return undefined;
      }
    } else if (str[i] in obj && obj[str[i]]) {
      obj = obj[str[i]];
    } else {
      return undefined;
    }
  }
  return obj;
}
console.log(getKey(obj, "a.b"));
console.log(getKey(obj, "arr[0].demo"));
