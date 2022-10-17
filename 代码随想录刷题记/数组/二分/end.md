总结，二分很需要去判断区间的左右开闭
- 如果需要精确的找到某一个数
  - 需要`[left,right)`
  - `while(left < right)`，因为right并不在区间内
  - `left = mid || right = mid`
- 如果需要找到第一个或者最后一个等于该数的位置
  - 需要`[left,right]`
  - `while(left <= right)`
  - `left = mid - 1 || right = mid + 1`
