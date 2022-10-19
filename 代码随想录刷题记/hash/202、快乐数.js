/**
 题目有暗示会无限循环，那么我们就可以用一个set保存历史记录
 */
 var isHappy = function(n) {
  const set = new Set()
  while(true){
      // 计算每一位的平方和
      let sum = 0
      while(n){
          sum = sum + (n % 10)** 2
          n = ~~(n / 10)
      }
      // 重制n
      n = sum
      // 判断
      if(sum === 1) return true
      if(set.has(sum)) return false
      set.add(sum)
  }
};