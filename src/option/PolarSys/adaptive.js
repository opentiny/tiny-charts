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
import { isArray, isObject } from '../../util/type';
// 组装直角坐标系自适应
function AdaptivePolarSys(baseOpt, iChartOpt, echartsIns, type) {
  if (!iChartOpt.adaptive) return;
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
    dataMax = iChartOpt.radarMax
  }
  const polarHeight = isArray(radius) ? radius[1] - radius[0] : radius;
  const scaleNumber = Math.trunc(polarHeight / 20); // 刻度轴行高18，最小间距2
  let split = dataMax / scaleNumber;
  if (type === 'polarBar'){
    if (split > 10) {
      split = (Math.trunc(split/10) + 1) * 10
    } else {
      split = Math.trunc(split) + 1
    }
    baseOpt.radiusAxis.minInterval = split
    baseOpt.radiusAxis.maxInterval = split
    baseOpt.radiusAxis.interval = split
    baseOpt.angleAxis.splitNumber = scaleNumber
  } else if (type === 'radar') {
    if (!Number.isInteger(split)) {
      baseOpt.radar[0].splitNumber = scaleNumber - 1
    } else {
      baseOpt.radar[0].splitNumber = scaleNumber
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

