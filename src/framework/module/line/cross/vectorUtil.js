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
export const add = function (t, n) {
  return [t[0] + n[0], t[1] + n[1]];
};
export const offset = function (t, n) {
  return [t[0] * n, t[1] * n];
};
export const vectorFromPoints = function (t, n) {
  return [n[0] - t[0], n[1] - t[1]];
};
export const isParallel = function (t, n) {
  if (t[0] * n[1] === t[1] * n[0]) return true;
  return false;
};
export const dot = function (t, n) {
  return t[0] * n[0] + t[1] * n[1];
};
export const cross = function (t, n) {
  return t[0] * n[1] - t[1] * n[0];
};
export const angleFrom = function (t) {
  return Math.acos(t[0] / Math.sqrt(t[0] * t[0] + t[1] * t[1]));
};
export const getUnitVector = function (t) {
  var n = Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  return [t[0] / n, t[1] / n];
};
export const equals = function (t, n) {
  return t[0] === n[0] && t[1] === n[1];
};
export const isOrthogonalLine = function (t, n) {
  return t[0] === n[0] || t[1] === n[1];
};
export const anotherOne = function (t, n) {
  return t.find((t) => t != n);
};
