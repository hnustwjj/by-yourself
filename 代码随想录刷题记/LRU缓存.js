// https://leetcode.cn/problems/lru-cache/

var LRUCache = function (capacity) {
  this.max = capacity;
  this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const item = this.cache.get(key);
    // delete再set，重置顺序
    this.cache.delete(key);
    this.cache.set(key, item);
    return item;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  const item = this.cache.get(key);
  if (item) {
    this.cache.delete(key);
  } else if (this.max <= this.cache.size) {
    // keys().next().value是最老被插入到map中的节点
    this.cache.delete(this.cache.keys().next().value);
  }

  this.cache.set(key, value);
};
