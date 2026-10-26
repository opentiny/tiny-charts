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

import max from '../../util/sort/max';
import min from '../../util/sort/min';
import { isArray, isObject, isString } from '../../util/type';

// 刻度数量的最大值
const MAX_SPLIT_NUMBER = 6;

// 计算取整后的刻度间隔（1/2/5 乘以 10 的 n 次方），保证每个刻度都是整数，且刻度数不超过 maxSplitNumber
function getNiceInterval(dataMax, maxSplitNumber) {
  const rawInterval = dataMax / maxSplitNumber;
  if (rawInterval <= 1) return 1;
  const power = Math.pow(10, Math.floor(Math.log10(rawInterval)));
  const fraction = rawInterval / power;
  let nice = 10;
  if (fraction <= 1) {
    nice = 1;
  } else if (fraction <= 2) {
    nice = 2;
  } else if (fraction <= 5) {
    nice = 5;
  }
  return nice * power;
}

// 组装直角坐标系自适应
function AdaptivePolarSys(baseOpt, iChartOpt, echartsIns, type) {
  if (!iChartOpt.adaptive && !iChartOpt.a2ui) return;
  const chartHeight = echartsIns?.getHeight?.() || echartsIns?.getDom?.()?.clientHeight || echartsIns?._dom?.clientHeight || 0;
  const radius = baseOpt.polar?.radius || baseOpt.radar[0].radius;
  let dataMax = 0, dataMin = 0;
  baseOpt.series.forEach((item, index) => {
    let data = getDataNoObject(item.data);
    if (isArray(data[0])) data = data[0];
    const itemMax = max(data);
    const itemMin = min(data);
    if (itemMax > dataMax) {
      dataMax = itemMax
    }
    if (dataMin > itemMin) {
      dataMin = itemMin
    }
  })
  if (iChartOpt.radarMax) {
    if (isArray(iChartOpt.radarMax)) {
      // 各维度单独配置最大值时，取其中的最大值参与计算
      iChartOpt.radarMax.forEach(item => {
        if (item?.max > dataMax) dataMax = item.max;
      })
    } else {
      dataMax = iChartOpt.radarMax
    }
  }
  let polarHeight = isArray(radius) ? radius[1] - radius[0] : radius;
  if (isString(polarHeight) && polarHeight.includes('%')) {
    polarHeight = ((parseFloat(polarHeight) / 100) * chartHeight) / 2;
  }
  // 刻度轴行高18，最小间距2，刻度数最多为 MAX_SPLIT_NUMBER
  const scaleNumber = Math.min(Math.trunc(polarHeight / 20) || 4, MAX_SPLIT_NUMBER);
  // 数据最大值小于 1 时无法产生整数刻度，交由 echarts 默认处理
  if (!dataMax || dataMax < 1) return;
  // 整数刻度间隔，每个刻度都是该间隔的整数倍，避免出现小数
  const interval = getNiceInterval(dataMax, scaleNumber);
  // 实际刻度数（段数），必然不超过 scaleNumber
  const splitCount = Math.ceil(dataMax / interval);
  if (type === 'polarBar'){
    baseOpt.radiusAxis.minInterval = interval
    baseOpt.radiusAxis.maxInterval = interval
    baseOpt.radiusAxis.interval = interval
    baseOpt.angleAxis.splitNumber = splitCount
  } else if (type === 'radar') {
    baseOpt.radar[0].splitNumber = splitCount
    // 阈值线位置按原始 radarMax 计算，存在阈值线时不调整最大值，避免阈值线错位
    if (!iChartOpt.markLine) {
      const newMax = splitCount * interval;
      const indicators = baseOpt.radar[0].indicator || [];
      indicators.forEach(item => {
        if (typeof item.max !== 'number' || item.max < 1) return;
        if (isArray(iChartOpt.radarMax)) {
          // 各维度最大值不同时，向上取整为刻度数的整数倍，保证每段刻度都是整数
          item.max = Math.ceil(item.max / splitCount) * splitCount;
        } else if (item.max === dataMax) {
          // 共用最大值时，统一取整到整数刻度的上限
          item.max = newMax;
        }
      });
    }
  }
}

function getDataNoObject(data) {
  if(!data) return data;
  return data.map(item => {
    return isObject(item) ? item.value : item
  })
}

export default AdaptivePolarSys;