// 一个粒子，进入装置后，会可能会变快，请找出变快的粒子个数
// 进入装置前的到达顺序：5 4 3 2 1
// 进入装置后的到达顺序：1 5 3 4 2
// 输出2
const arr1 = [5, 4, 3, 2, 1];
const arr2 = [1, 5, 3, 4, 2];
// 先是5和1比，不同，因为原来的5是最快的，所以1肯定变快了，把1加入res
// 在对比5和5，i++，j++
// 在对比4和3,4是第二快的，而3到前面了，说明3变快了，把3加入res
// 在对比4和4，i++，j++
// 在对比3和2，因为3已经被加入了，所以跳过
// 在对比2和2，不变，i++，j++
// 此时j到末尾，退出循环
function parse(before, after) {
  let j = 0;
  const res = new Set(); //保存变快的粒子
  const len = before.length;
  for (let i = 0; i < len; i++) {
    if (j > len) {
      break;
    }
    if (res.has(before[i])) continue; // 如果第i个粒子已经被加入了，就跳过
    while (before[i] !== after[j]) {
      res.add(after[j]);
      if (j === len - 1) break;
      j++;
    }
    j++;
  }
  console.log(res.size);
}
parse(arr1, arr2);
