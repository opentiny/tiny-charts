// 代理对象, 实现对象的响应式更新
export default function proxy(callBack) {
  return new Proxy({}, {
      get(_, prop) {
        return callBack()[prop];
      }
    }
  );
}
