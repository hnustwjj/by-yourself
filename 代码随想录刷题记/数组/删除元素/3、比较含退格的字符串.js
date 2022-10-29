/**
  理所应当的就是用栈
*/
 var backspaceCompare = function(s, t) {
  function resolve(arr){
      const res = []
      for(let i = 0 ; i < arr.length ; i++){
          if(arr[i] === '#') res.pop()
          else res.push(arr[i])
      }
      return res.toString()
  }
  const ss = resolve(s)
  const tt = resolve(t)
  return ss === tt
};