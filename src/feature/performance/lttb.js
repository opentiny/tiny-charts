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
var UNDEFINED = 'undefined';
var CtorUint32Array = typeof Uint32Array === UNDEFINED ? Array : Uint32Array;
var CtorUint16Array = typeof Uint16Array === UNDEFINED ? Array : Uint16Array;
function getIndicesCtor(rawCount) {
  return rawCount > 65535 ? CtorUint32Array : CtorUint16Array;
}

export function lttb(data) {
  let rate = 1 / Math.round(data.length / 1040);
  let newData = []; //返回数据
  const len = data.length; // y 轴值的总数量
  let sampledIndex = 0; // 初始采样索引 0
  const frameSize = Math.floor(1 / rate); // x 轴的缩放比例，每次的步长
  // 当前的真实索引 raw 原始的，注意，这里是索引，不是具体值
  let currentRawIndex = 0;
  let maxArea; // 最大面积
  let area; // 临时计算面积
  let nextRawIndex; // 下一个原始索引
  // getIndicesCtor 根据 this._rawCount 的大小，判断返回哪种类型
  // Uint32Array or Uint16Array 初始化扇区缓存，初始数据全部是0
  const newIndices = new (getIndicesCtor(len))(Math.ceil(len / frameSize) + 2); 
  // First frame use the first data.
  newIndices[sampledIndex++] = currentRawIndex;
   // 去除首尾两个点，步长循环处理
  for (let i = 1; i < len - 1; i += frameSize) {
      // 后一个桶的 x 轴平均值，这里加上 frameSize 是因为起点已经确认
      // 第二个桶开始点，应该与第一个间隔frameSize。
      const nextFrameStart = Math.min(i + frameSize, len - 1);
      const nextFrameEnd = Math.min(i + frameSize * 2, len);
      const avgX = (nextFrameEnd + nextFrameStart) / 2;
      // 后一个桶的 y 的平均点
      let avgY = 0;
      for (let idx = nextFrameStart; idx < nextFrameEnd; idx++) {
          const rawIndex = idx;
          const y = data[rawIndex] ; // 获取 y 轴真实的数值，data 中给的
          if (isNaN(y)) { // 是非数字，跳过当前循环，开始下一个循环
              continue;
          }
          avgY += y ; // 累加
      }
      // 值的平均，桶或者点集的总和（排除非法值）除以长度
      avgY /= (nextFrameEnd - nextFrameStart);
      const frameStart = i; // 当前点集 起始索引
      const frameEnd = Math.min(i + frameSize, len); // 当前点集，结束索引
      const pointAX = i - 1; // A 为三个点中的首个点。当前为 0
      const pointAY = data[currentRawIndex] ; // 首个点的真实 y 值
      maxArea = -1; // 初始最大面积
      // 整体上来看，x 轴为点的位置坐标，为值，y 轴为真实的数值
      nextRawIndex = frameStart;
      for (let idx = frameStart; idx < frameEnd; idx++) {
          const rawIndex = idx;
          const y = data[rawIndex] ;
          if (isNaN(y)) { // 是非数字，就跳过当前循环
              continue;
          }
          // 构筑直角坐标系，三角形的面积和，等于左侧矩形加上右侧梯形减去右上三角形
          // 整理可得如下公式。
          area = Math.abs((pointAX - avgX) * (y - pointAY)
              - (pointAX - idx) * (avgY - pointAY)
          );
          if (area > maxArea) {
              maxArea = area;
              nextRawIndex = rawIndex; // Next a is this b
          }
      }
      // 找到下一桶的最大面积真实索引，同时 sampleIndex++ 下移一位
    newIndices[sampledIndex++] = nextRawIndex;
    newData.push(data[nextRawIndex]);
      // This a is the next a (chosen b) 对于下一个桶，当前的最佳桶就是上一个桶。
      currentRawIndex = nextRawIndex;
  }
  newIndices[sampledIndex++] = len - 1; // 最后一个点
  return newData;
}