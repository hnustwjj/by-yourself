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
  function dfs(obj,arr){
    if(arr.length === 0) return undefined
    const substr = arr.shift()
    let idx = substr.indexOf('[')
    if(idx !== -1){
      let num = 0
      idx++
      while(substr[idx] !== ']') num = num * 10 + +substr[idx++]
      const raw = substr.split('[')[0]
      if(arr.length === 0) return obj[raw][idx]
      return dfs(obj[raw][num],arr)
    }else{

      if(arr.length === 0) return obj[substr]
      return dfs(obj[substr], arr)
    }
  }
  return dfs(obj,arr)
}
console.log(getKey(obj, "a.b"));
console.log(getKey(obj, "arr[0].demo"));