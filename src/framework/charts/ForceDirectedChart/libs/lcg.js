/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use

// 线性同余方法(LCG) 产生伪随机数的方法
const a = 1664525; // 乘数（移位）
const c = 1013904223; // 加数（偏移）
const m = 4294967296; // 2^32  模数（取模）

// (a * s + c) % m 每下一个随机数是当前随机数向左移动 log2 a 位，加上一个 c，最后对 m 取余，使随机数限制在 0 ~ m-1 内
export default function() {
  let s = 1; // 当前随机数
  return () => (s = (a * s + c) % m) / m;
}
