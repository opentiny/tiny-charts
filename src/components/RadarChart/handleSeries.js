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
import { isObject } from '../../util/type';
import { getSeriesUnit, getRedPointerRadar, handleRedPointerSeries } from './BaseOption'
import { setRadarShape } from './handleOptipn'
import { getColor } from '../../util/color';
import merge from '../../util/merge';

function setEmphasisItemStyleBorderColor(iChartOpt, nameIndex) {
  const borderColor = getColor(iChartOpt.color, nameIndex)
  return {
    itemStyle: {
      borderColor
    }
  }
}

function setAreaStyleOpacity(seriesUnit, iChartOpt) {
  const { area } = iChartOpt
  if (area) {
    merge(seriesUnit.areaStyle, area)
  }
  if (area && (area.show === false)) {
    seriesUnit.areaStyle.opacity = 0
    seriesUnit.emphasis.areaStyle.opacity = 0
  }
}

function setSeries(baseOpt, iChartOpt, radarKeys, data) {
  const dataNames = Object.keys(data);
  const seriesUnit = getSeriesUnit();
  setAreaStyleOpacity(seriesUnit, iChartOpt)
  const seriesData = dataNames.map((name, nameIndex) => {
    const radarData = {
      name,
      value: radarKeys.map(key => {
        return data[name][key];
      }),
      emphasis: setEmphasisItemStyleBorderColor(iChartOpt, nameIndex),
    }
    return radarData
  })
  seriesUnit.data = seriesData
  baseOpt.series.push(seriesUnit);
}



function handleRedPointerRadar(baseOpt, radarKeys, dataNameIndex, dataName) {
  const max = baseOpt.radar[0].indicator.find(item => item.name === dataName).max;
  const redPointerRadar = getRedPointerRadar();
  setRadarShape(redPointerRadar, baseOpt)
  redPointerRadar.center = baseOpt.radar[0].center;
  redPointerRadar.radius = baseOpt.radar[0].radius;
  redPointerRadar.startAngle = 90 + (360 / radarKeys.length) * dataNameIndex;
  redPointerRadar.indicator = [{ name: '', max }];
  return redPointerRadar;
}



// 计算出大于等于阈值的数据
function getExceededMarkLineValue(data, markLine, isThreshold) {
  const thresholdPoint = [];
  const names = Object.keys(data);
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const keys = Object.keys(data[name]);
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const markLineVal = isThreshold ? markLine.threshold[key] : markLine;
      if ((markLineVal||markLineVal===0) && data[name][key] >= markLineVal) {
        thresholdPoint.push({
          seriesName: name,
          dataName: key,
          dataValue: data[name][key],
        });
      }
    }
  }
  return thresholdPoint;
}

/**
 * 根据参数计算出圆盘图的半径
 */
export function setMarkLineSeries(baseOpt, iChartOpt, radarKeys) {
  // 阈值
  const { markLine, gradient } = iChartOpt;
  if (gradient) return
  if (markLine) {
    const { data } = iChartOpt;
    const isThreshold = !!(isObject(markLine) && markLine?.threshold);
    // 超过阈值的数据
    const exceeded = getExceededMarkLineValue(data, markLine, isThreshold);
    exceeded.forEach((item, index) => {
      const seriesName = item.seriesName;
      const dataName = item.dataName;
      const dataNameIndex = radarKeys.indexOf(dataName);
      const dataValue = item.dataValue;
      // 需要高亮红点的坐标系,一个红点对应一个坐标系，需要去修改相应的数据
      const redPointerRadar = handleRedPointerRadar(baseOpt, radarKeys, dataNameIndex, dataName);
      // 红点数据
      const redPointerSeries = handleRedPointerSeries(index, dataValue, seriesName);
      baseOpt.radar.push(redPointerRadar);
      baseOpt.series.push(redPointerSeries);
    });
  }
}

export { setSeries,getExceededMarkLineValue,handleRedPointerSeries,handleRedPointerRadar};
