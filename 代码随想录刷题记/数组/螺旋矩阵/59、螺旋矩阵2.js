// 总共要进行count次环状填充
// 判断n的奇偶，决定最后是否需要在中心填数据
var generateMatrix = function (n) {
  const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let count = ~~(n / 2);
  let offset = 0;
  let x = 0;
  let y = 0;
  let idx = 1;
  while (offset < count) {
    // 四个边都是左闭右开的去填充数据
    while (y < n - offset - 1) arr[x][y++] = idx++;
    while (x < n - offset - 1) arr[x++][y] = idx++;
    while (y > offset) arr[x][y--] = idx++;
    while (x > offset) arr[x--][y] = idx++;

    // 一轮进行完之后，xy和offset都偏移
    x++;
    y++;
    offset++;
  }
  if (n % 2 === 1) arr[count][count] = n * n;
  return arr
};

generateMatrix(3);
