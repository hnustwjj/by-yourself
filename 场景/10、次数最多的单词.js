function findmax(str) {
  const arr = str.toLowerCase().match(/[A-z]+/g)  //找一个或多个字母组成的字符串
  const map = {}
  let maxCount = 0
  let maxStr = ""
  arr.forEach(item => {
    map[item] = (map[item] ?? 0) + 1
    if (map[item] > maxCount) {
      maxStr = item
      maxCount = map[item]
    }
  })
  return [maxStr, maxCount]
}

const res = findmax(
  "Age has reached the the end of the beginning of a word. May be guilty in his seems to passing a lot of different life became the appearance of the same day;node"
)
console.log(res)
