
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  for (let i = 0; i < gas.length; i++) {
      totalGas += gas[i];
      totalCost += cost[i];
  }
  if (totalGas < totalCost) {//总油量小于总油耗 肯定不能走一圈
      return -1;
  }

  let currentGas = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
      currentGas = currentGas - cost[i] + gas[i];
      if (currentGas < 0) {//如果到达下一站的时候油量为负数 就以这个站为起点 从新计算
          currentGas = 0;
          start = i + 1;
      }
  }

  return start;
};