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
import min from '../../util/sort/min';
import max from '../../util/sort/max';
import { CHARTTYPE } from './BaseOption';
import merge from '../../util/merge';
import visualMap from '../../option/config/visualMap';

/**
 * 设置日历热力图视觉滑块控制手柄
 */
function handleCalendar(iChartOption, visualUnit, maxValue, minValue,visualType) {
  visualUnit.show = !!iChartOption.handle;
  if(visualType==='continuous')  visualUnit.itemHeight = 400
  visualUnit.text = [maxValue, minValue]
  visualUnit.right = '4%';
  visualUnit.bottom = '6%';
  if (iChartOption.handle) {
    merge(visualUnit, iChartOption.handle);
    if (iChartOption.handle.width) {
      visualUnit.itemWidth = iChartOption.handle.width
      delete visualUnit.width
    }
    if (iChartOption.handle.height) {
      visualUnit.itemHeight = iChartOption.handle.height
      delete visualUnit.height
    }
    if (iChartOption.handle.position) {
      merge(visualUnit, iChartOption.handle.position);
      delete visualUnit.position
    }
  }
  visualUnit.inRange = (!iChartOption.changeProperty || iChartOption.changeProperty === 'opcity') ? { opacity: [0, 1] } : { color: iChartOption.color }
}

function getVisualType(iChartOption) {
  const { visualMap, handle } = iChartOption
  let type = handle?.type ?? visualMap?.type ?? 'continuous'
  return type
}

/**
 * 组装echarts所需要的series
 */
export function setVisualMap(baseOpt, type, data, iChartOption) {
  const baseVisualMap = [];
  const visualType = getVisualType(iChartOption)
  const visualUnit = visualMap(visualType)
  const intervalData = {
    RectangularHeatMapChart: data,
    CalendarHeatMapChart: data[2],
    HexagonHeatMapChart: data[0],
  };
  const intervalArr = intervalData[type].map(item => {
    return item[2];
  });
  const minValue = min(intervalArr);
  const maxValue = max(intervalArr);
  visualUnit.min = minValue;
  visualUnit.max = maxValue;
  visualUnit.dimension = 2
  if (type === CHARTTYPE[0]) {
    visualUnit.inRange = {
      colorAlpha: [0, 1]
    }
  }
  if (type === CHARTTYPE[1]) {
    // 设置视觉滑块控制手柄  设置VisualMap控制的热力变化属性
    handleCalendar(iChartOption, visualUnit, maxValue, minValue,visualType);
  }
  if (type === CHARTTYPE[2]) {
    visualUnit.inRange = {
      color: iChartOption.color
    }
  }
  if (iChartOption.visualMap) {
    merge(visualUnit, iChartOption.visualMap)
  }
  baseVisualMap.push(visualUnit);

  baseOpt.visualMap = baseVisualMap;
}
