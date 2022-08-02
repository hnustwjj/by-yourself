let activeEffect: null | Function = null;
// 收集依赖
function effect(fn: Function) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

const targetMap = new WeakMap();

// 获取到对应的dep
function getDep(target: object, key: string | symbol): Set<any> {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let set = map.get(key);
  if (!set) {
    set = new Set();
    map.set(key, set);
  }
  return set;
}

// 判断是否是object
function isObject(raw: any) {
  return typeof raw === "object" && raw !== null;
}

// 收集依赖
function track(target: object, key: string | symbol) {
  const dep = getDep(target, key);
  // 只收集effect中执行的函数作为依赖
  if (activeEffect) dep.add(activeEffect);
}

// 触发依赖
function trigger(target: object, key: string | symbol) {
  const dep = getDep(target, key);
  dep.forEach(effect => {
    effect();
  });
}

// 创建响应式对象
function reactive(raw: any) {
  return new Proxy(raw, {
    get(target, key, receiver): any {
      track(target, key);
      const res = Reflect.get(target, key, receiver);
      return isObject(res) ? reactive(res) : res;
    },
    set(target, key, receiver) {
      Reflect.set(target, key, receiver);
      trigger(target, key);
      return true;
    },
  });
}

const a = reactive({ name: "wjj", friend: { name: "jzsp" } });
effect(() => {
  console.log("我是", a.name);
});
effect(() => {
  console.log("wjj的friends是",a.friend.name);
});

a.name = 'jzsp';
a.friend.name = 'jzsp2';

export {}