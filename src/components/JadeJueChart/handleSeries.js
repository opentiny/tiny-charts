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
import { getColor } from '../../util/color';
import { handleMinRatio } from './handleOption';
import chartToken from './chartToken';
import merge from '../../util/merge';
import { getTextWidth } from '../../util/dom';
import { borderRadiusText, CHARTTYPE, defaultSeries } from './BaseOption';

// 根据数据值绑定上圆角
const bindBorderRaduis = (data) => {
  data.forEach(item => {
    let hasValueIndexArr = [];
    item.children.forEach((v, key) => {
      if (v.value) {
        hasValueIndexArr.push(key);
      }
    });
    item.children.forEach((v, key) => {
      if (hasValueIndexArr.includes(key)) {
        if (hasValueIndexArr.length === 1) {
          v.itemStyle = {
            borderRadius: [borderRadiusText, borderRadiusText, borderRadiusText, borderRadiusText]
          };
          return;
        }
        let keyIndex = hasValueIndexArr.findIndex((a) => a === key);
        if (keyIndex === 0) {
          v.itemStyle = {
            borderRadius: [borderRadiusText, 0, borderRadiusText, 0]
          };
        } else if (keyIndex === hasValueIndexArr.length - 1) {
          v.itemStyle = {
            borderRadius: [0, borderRadiusText, 0, borderRadiusText]
          };
        } else {
          v.itemStyle = {
            borderRadius: [0, 0, 0, 0]
          };
        }
      }
    });
  });
};

function createSeries(iChartOption, baseOpt, sum, legendData) {
  const { showBackground = true, data } = iChartOption;
  bindBorderRaduis(data);
  for (let i = 0; i <= legendData.length - 1; i++) {
    let seriesData = [];
    data.forEach(item => {
      seriesData.push(item.children.find(v => {
        if (v.type === legendData[i]) {
          v.sum = baseOpt.angleAxis.sum;
          return v;
        }
      }));
    });
    baseOpt.series.push({
      ...defaultSeries,
      data: seriesData,
      name: legendData[i],
    });
  }
  if (showBackground) {
    const placeHolderData = [];
    data.forEach((_, index) => {
      let typeSum = 0;
      baseOpt.series.forEach((v) => {
        typeSum += v.data[index]?.value ?? 0;
      });
      placeHolderData.push({
        type: 'stack背景占位',
        value: baseOpt.angleAxis.sum - typeSum,
        itemStyle: { color: chartToken.itemColor },
        sum: 0
      });
    });
    baseOpt.series.push({
      ...defaultSeries,
      data: placeHolderData,
      silent: true,
      roundCap: true,
      z: 1
    });
  }
  baseOpt.series.forEach((series, index) => {
    series.sum = sum;
    series.itemStyle = {
      borderColor: chartToken.itemBorderColor,
      borderWidth: chartToken.itemBorderWidth,
    };
  });
}

const setRadiusAxis = (baseOpt, data, chartType, iChartOption) => {
  const { labelContent = 'name', showBackground = true } = iChartOption;
  baseOpt.radiusAxis.z = 10;
  if (chartType === CHARTTYPE.PROCESS) {
    baseOpt.radiusAxis.data = [];
    return;
  } else {
    baseOpt.radiusAxis.data = data.map(item => item.name);
  }
  const getRatio = (params) => {
    const index = params[1];
    let value = 0;
    let ratio = 0;
    if (chartType === CHARTTYPE.STACK) {
      (showBackground ? baseOpt.series.slice(0, -1) : baseOpt.series).forEach(val => {
        value += val.data[index]?.value ?? 0;
      });
    } else {
      value = baseOpt.series[index].data[index].beforeChangeValue ?? baseOpt.series[index].data[index].value ?? 0;
    }
    ratio = value / baseOpt.angleAxis.sum;
    return ratio;
  };
  const iChartLabelFormatter = iChartOption?.radiusAxis?.axisLabel?.formatter;
  if (iChartLabelFormatter) {
    baseOpt.radiusAxis.axisLabel.formatter = (...params) => iChartLabelFormatter(...params, getRatio(params));
  } else {
    if (labelContent === 'name') {
      return;
    } else if (labelContent === 'nameWithRatio') {
      const iChartLabelRich = iChartOption?.radiusAxis?.axisLabel?.rich ?? {};
      const defaultLabelRich = {
        name: {
          color: chartToken.labelValueColor,
          padding: [0, chartToken.labelPadding, 0, 0],
          align: 'right',
        },
        ratio: {
          color: chartToken.labelRatioColor,
          // 设置宽度才能保证name也右对齐
          width: getTextWidth('100%', baseOpt.radiusAxis.axisLabel.fontSize),
          align: 'right',
        }
      };
      baseOpt.radiusAxis.axisLabel.rich = merge(defaultLabelRich, iChartLabelRich);
      baseOpt.radiusAxis.axisLabel.formatter = (...params) => `{name|${params[0]}}{ratio|${(getRatio(params) * 100).toFixed(0) + '%'}}`;
    }
  }
};

// 配置玉玦图的seriesData数据（value,name,color）
export function setSeriesData(iChartOption, baseOpt, chartType) {
  let { showBackground = true, data, color, roundCap = true } = iChartOption;
  if (chartType === CHARTTYPE.PROCESS) {
    data.forEach((dataItem, index) => {
      baseOpt.series.push({
        ...defaultSeries,
        data: [dataItem.value],
        roundCap: false,
        name: dataItem.name,
        beforeChangeValue: undefined,
        showBackground,
        backgroundStyle: { color: chartToken.itemColor }
      });
    });
  } else if (chartType === CHARTTYPE.BASE) {
    data.forEach((dataItem, index) => {
      const newData = [];
      data.forEach(v => {
        const newIndex = data.length - 1 - index;
        newData.push({
          ...v,
          value: v.name === dataItem.name ? dataItem.value : 0,
          itemStyle: {
            color: Array.isArray(color) ? getColor(color, newIndex) : color,
          },
          sum: baseOpt.angleAxis.sum,
          beforeChangeValue: undefined,
          index: newIndex
        });
      });
      baseOpt.series.push({
        ...defaultSeries,
        data: newData,
        roundCap,
        name: dataItem.name,
      });
    });
    if (showBackground) {
      let bgData = [];
      data.forEach(dataItem => {
        bgData.push({
          ...dataItem,
          itemStyle: {
            color: chartToken.itemColor,
          },
          value: baseOpt.angleAxis.sum - (dataItem.value ?? 0),
          sum: 0,
        });
      });
      baseOpt.series[data.length] = {
        ...defaultSeries,
        data: bgData,
        z: 1,
        roundCap,
        // 关闭灰色进度鼠标hover事件
        silent: true,
      };
    }
  } else {
    let legendData = [];
    data.forEach(item => {
      legendData = legendData.concat(item.children.map(v => v.type));
    });
    legendData = Array.from(new Set(legendData));
    // 将数据按照legend的顺序排列好
    data.forEach((item, index) => {
      item.children.sort((a, b) => legendData.findIndex(v => v === a.type) - legendData.findIndex(v => v === b.type));
    });
    createSeries(iChartOption, baseOpt, baseOpt.angleAxis.sum, legendData);
  }

  // 自定义柱体最小占比
  handleMinRatio(iChartOption, baseOpt, chartType);

  // 配置展示每项data的名称,及显示层级
  setRadiusAxis(baseOpt, data, chartType, iChartOption);
}

// 对非堆叠类型数据取反（已对iChartOption进行深拷贝），实现数据从外向内展示（echarts默认为内向外）
export function reverseData(iChartOption, that) {
  const { type = CHARTTYPE.BASE, data } = iChartOption;
  let noChildData = data.every(item => (!item.children || !item.children.length));
  if (type === CHARTTYPE.PROCESS) {
    that.chartType = CHARTTYPE.PROCESS;
  } else if (type === CHARTTYPE.BASE || noChildData) {
    that.chartType = CHARTTYPE.BASE;
    iChartOption.data = iChartOption.data.reverse();
  } else {
    that.chartType = CHARTTYPE.STACK;
  }
};
