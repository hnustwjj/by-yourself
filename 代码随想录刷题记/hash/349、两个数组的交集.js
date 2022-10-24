/**
  其中一个数组放入set，用于判断是否存在
 */
 var intersection = function(nums1, nums2) {
  if(nums1.length < nums2.lenght){
      let temp = nums1
      nums1 = nums2
      nums2 = temp
  }
  // nums1长度是最大的
  const set2 = new Set(nums2)
  const res = new Set()
  for(let i = 0 ; i < nums1.length ; i++){
      if(set2.has(nums1[i])){
          res.add(nums1[i])
      }
  }
  return [...res]
};
