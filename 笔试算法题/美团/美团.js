function parse(reg, str) {
  let l1 = reg.length
  let l2 = str.length
  let res = 0
  for (let i = 0; i <= l2 - l1; i++) {
    let j
    for (j = 0; j < l1; j++) {
      if (reg[j] === "*") continue
      if (str[i + j] !== reg[j]) break
    }
    if (j === l1) res++
  }
  return res
}
console.log(parse("a*c", "abcaacc"))
