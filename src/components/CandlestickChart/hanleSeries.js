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
import cloneDeep from '../../util/cloneDeep';
import { BASICSERIES } from './BaseOption';
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import { xkey } from '../../option/RectSys';
import Theme from '../../feature/token';

// 用于计算相关的平均值
function calculateMA(dayCount, data) {
  const result = [];
  for (let i = 0, len = data.length; i < len; i++) {
    if (i < dayCount) {
      result.push('');
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += +data[i - j][1];
    }
    result.push(Number((sum / dayCount).toFixed(2)));
  }
  return result;
}

function getLineChartData(data, total, ma, xAxisKey) {
  const maData = {};
  ma.forEach(item => {
    const data = calculateMA(item, total);
    maData[`MA${item}`] = data;
  });
  const lineData = data.map((obj, index) => {
    const newObj = {
      [xAxisKey]: obj[xAxisKey],
    };
    for (const i in maData) {
      if (Object.hasOwnProperty.call(maData, i)) {
        newObj[i] = maData[i][index];
      }
    }
    return newObj;
  });
  return lineData;
}

function getBarChartData(data, xAxisKey) {
  const barData = data.map(obj => {
    const newObj = {
      [xAxisKey]: obj[xAxisKey],
      volume: obj.volume,
    };
    return newObj;
  });
  return barData;
}

function handleMaSeries(baseOpt, iChartOpt, {data, total, MA:inerMa, xAxisKey}, chartInstance) {
  const lineChartData = getLineChartData(data, total, inerMa, xAxisKey);
  const newIchartOption = { ...iChartOpt, data: lineChartData };
  const lineChart = new LineChart(newIchartOption, {}, chartInstance);
  const lineBaseOption = lineChart.getOption();
  const lineSeries = lineBaseOption.series;
  for (let i = 0; i < lineSeries.length; i++) {
    baseOpt.series.push(lineSeries[i]);
  }
}

function handleVol(baseOpt, iChartOpt, { data, xAxisKey, total }, { upStateColor, downStateColor }, chartInstance) {
  const barChartData = getBarChartData(data, xAxisKey);
  const newIchartOption = { ...iChartOpt, data: barChartData };
  const barChart = new BarChart(newIchartOption, {}, chartInstance);
  // 获取生成的相应的barchart配置
  const barBaseOption = barChart.getOption();
  const barSeries = barBaseOption.series[0];
  barSeries.itemStyle.color = params => {
    const { dataIndex } = params;
    const curTimeData = total[dataIndex];
    return curTimeData[0] > curTimeData[1] ? downStateColor : upStateColor;
  };
  barSeries.xAxisIndex = 1;
  barSeries.yAxisIndex = 1;
  baseOpt.series.push(barSeries);
}

function handleMaAndVolSeries(baseOpt, iChartOpt, inerData, { upStateColor, downStateColor }, chartInstance) {
  const { MA, volume, data } = iChartOpt;
  const { total } = inerData;
  const xAxisKey = xkey(iChartOpt);
  if (MA && MA.length !== 0) {
    handleMaSeries(baseOpt, iChartOpt, {data, total, MA, xAxisKey}, chartInstance);
  }
  if (volume) {
    handleVol(baseOpt, iChartOpt, { data, xAxisKey, total }, { upStateColor, downStateColor }, chartInstance);
  }
}

function handleSeries(baseOpt, iChartOpt, data, chartInstance) {
  const { upColor, downColor } = iChartOpt;
  const { colorState } = Theme.config;
  const upStateColor = upColor || colorState.colorError;
  const downStateColor = downColor || colorState.colorSuccess;
  const baseSeries = cloneDeep(BASICSERIES);
  baseSeries[0].data = data.total;
  baseSeries[0].itemStyle.color = upStateColor;
  baseSeries[0].itemStyle.color0 = downStateColor;
  baseSeries[0].itemStyle.borderColor = upStateColor;
  baseSeries[0].itemStyle.borderColor0 = downStateColor;
  baseOpt.series = baseSeries;

  handleMaAndVolSeries(baseOpt, iChartOpt, data, { upStateColor, downStateColor }, chartInstance);
}

export { handleSeries };
