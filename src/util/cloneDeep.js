// 深拷贝
function cloneDeep(obj) {
  const objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        objClone[key] = cloneDeep(obj[key]);
      } else {
        objClone[key] = obj[key];
      }
    }
  }
  return objClone;
}

export default cloneDeep;
