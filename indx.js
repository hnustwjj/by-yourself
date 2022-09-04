const a = {
  toString() {
    console.log("toString被调用");
  },
  valueOf() {
    console.log("valueOf被调用");
    return undefined;
  },
};

console.log(a + 1);
console.log(a * 2);
console.log(a + "1");
console.log(String(a));
