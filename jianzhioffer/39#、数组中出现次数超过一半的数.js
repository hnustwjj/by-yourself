// 超过一半是关键，因为如果我们设置一个count，等于这个数时++，不等于时--
// 到最后这个count肯定不为0
// 那么我们可以假设第一个数就是要找的数
// 如果count最终会等于0，说明它不是众数
var majorityElement = function (nums) {
  let target = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      target = nums[i];
      count = 1;
    } else if (target === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return target;
};
