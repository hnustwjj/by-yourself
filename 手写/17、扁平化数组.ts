const arr = [1, [2], [[3]], [[[4]]]]
function myFlatMap(arr, deep) {
  const res = arr.reduce(
    (pre, item) =>
      Array.isArray(item) && deep
        ? [...pre, ...myFlatMap(item, deep - 1)]
        : [...pre, item],
    []
  )
  return res
}

function myFlatMap2(arr) {
  return [...new Set(arr)]
}

console.log(myFlatMap(arr, 1))
