/**
  在nums1,nums2中统计nums1[i]+nums2[j]===k的次数，用hash进行统计
  在统计，hash中，nums3[i]+nums4[j]=== 0 - k的次数
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = {};
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      map[sum] = map[sum] ?? 0;
      map[sum]++;
    }
  }
  let res = 0;
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j];
      const t = map[0 - sum] ?? 0;
      res += t;
    }
  }
  return res;
};
