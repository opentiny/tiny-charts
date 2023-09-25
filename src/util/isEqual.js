import { isObject, isArray } from "./type";

/**
 * 深比较两个对象
 * 如果对比的是两个数组，值一致，顺序改变，如[1,2]和[2,1]，算不等
 * 如果对比的是两个对象，值一致，顺序改变。如{a:1,b:2}和{b:2,a:1},算相等
 */
export function isObjEqual(obj1, obj2) {
  // 两个数据有任何一个不是对象或数组
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型(注意：参与equal的一般不会是函数)
    return obj1 === obj2;
  }
  // 如果传的两个参数都是同一个对象或数组
  if (obj1 === obj2) {
    return true;
  }

  // 两个都是对象或数组，而且不相等
  // 1.先比较obj1和obj2的key的个数，是否一样
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // 如果key的个数相等,就是第二步
  // 2.以obj1为基准，和obj2依次递归比较
  for (let key in obj1) {
    // 比较当前key的value  --- 递归
    const res = isObjEqual(obj1[key], obj2[key]);
    if (!res) {
      return false;
    }
  }

  // 3.全相等
  return true;
}


/**
 * 对比两个简单类型数组的值和长度是否完全一样（值的顺序允许改变）
 * 值一致，顺序不一致，如[1,2]和[2,1],算相等
 */
export function isArrayEqual(arr1, arr2) {
  // 传入的不全是Array
  if (!isArray(arr1) || !isArray(arr2)) {
    return false;
  }

  // 长度不一致
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 循环arr1的每一项,每一项在arr1和arr2中出现的次数也需相等，如 [1,1,2]和[1,2,2] [1,2]和[2,3]
  for (let key of arr1) {
    if (getItemCount(arr1, key) !== getItemCount(arr2, key)) {
      return false;
    }
  }

  // 全符合条件
  return true;
}

// 获取数组中的每项出现的次数
function getItemCount(arr, item) {
  let count = 0;
  arr.forEach(key => {
    if (key === item) {
      count++;
    }
  });
  return count;
}