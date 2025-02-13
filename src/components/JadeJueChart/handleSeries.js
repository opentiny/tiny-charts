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
import cloneDeep from '../../util/cloneDeep';
import { handleMinRatio } from './handleOption';
import chartToken from './chartToken';
import merge from '../../util/merge';
import { getTextWidth } from '../../util/dom';

function createSeries(iChartOption, baseOpt, sum, legendData) {
  const { showBackground = true } = iChartOption;
  // 添加series中的数据
  let length = 0;
  iChartOption.data.forEach(dataItem => {
    if (length <= dataItem.children.length) {
      length = dataItem.children.length;
    }
  });
  // 通过判断图例的数量来配置series的子集数量
  if (baseOpt.series.length < length) {
    for (let i = 0; i <= length - 1; i++) {
      baseOpt.series.push({
        type: 'bar',
        data: '',
        stack: 'a',
        coordinateSystem: 'polar',
      });
    }
  }
  // series的非头尾数据的圆角取消及z值最高
  baseOpt.series.forEach((series, index) => {
    series.sum = sum;
    series.itemStyle = {
      borderColor: chartToken.itemBorderColor,
      borderWidth: chartToken.itemBorderWidth,
      borderRadius: [chartToken.itemBorderRadius, 0, chartToken.itemBorderRadius, 0]
    };
    if (baseOpt.series.length === 1) {
      series.itemStyle.borderRadius = [chartToken.itemBorderRadius, chartToken.itemBorderRadius, chartToken.itemBorderRadius, chartToken.itemBorderRadius];
      return;
    }
    switch (index) {
      case 0:
        break;
      case baseOpt.series.length - 1:
        series.itemStyle.borderRadius = [0, chartToken.itemBorderRadius, 0, chartToken.itemBorderRadius];
        break;
      default:
        series.itemStyle.borderRadius = [0, 0, 0, 0];
        break;
    }
  });
  // 将iChartOption的data数据依次赋给series
  for (let i = 0; i < length; i++) {
    baseOpt.series[i].data = [];
    iChartOption.data.forEach(item_ => {
      baseOpt.series[i].data.push(item_.children[i]);
      baseOpt.series[i].name = legendData[i];
    });
  }
  if (showBackground) {
    const placeHolderData = [];
    iChartOption.data.forEach((_, index) => {
      let typeSum = 0;
      baseOpt.series.forEach((v) => {
        typeSum += v.data[index].value;
      });
      placeHolderData.push({
        type: 'stack背景占位',
        value: baseOpt.angleAxis.sum - typeSum,
        itemStyle: { color: chartToken.itemColor, borderRadius: [0, chartToken.itemBorderRadius, 0, chartToken.itemBorderRadius] },
        sum: 0
      });
    });
    baseOpt.series.push({
      type: 'bar',
      data: placeHolderData,
      stack: 'a',
      coordinateSystem: 'polar',
      silent: true,
    });
  }
}

const setRadiusAxis = (baseOpt, data, type, iChartOption) => {
  const { labelContent = 'name', showBackground = true } = iChartOption;
  baseOpt.radiusAxis.z = 10;
  baseOpt.radiusAxis.data = [];
  if (type === 'process') return; // 进度图不展示左侧文本
  data.forEach((item, index) => {
    baseOpt.radiusAxis.data.push(item.name);
  });
  const getRatio = (params) => {
    const index = params[1];
    let value = 0;
    let ratio = 0;
    if (iChartOption.type === 'stack') {
      if (!showBackground) {
        baseOpt.series.forEach(val => {
          value += val.data[index].value;
        });
      } else {
        baseOpt.series.slice(0, -1).forEach(val => {
          value += val.data[index].value;
        });
      }
    } else {
      value = baseOpt.series[index].data[index].beforeChangeValue ?? baseOpt.series[index].data[index].value;
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
export function setSeriesData(iChartOption, baseOpt) {
  let { showBackground = true, data, color, roundCap = true, type = 'base' } = iChartOption;
  // 原先写法是将所有data放在series[0]，灰度data放在series[1]中，因此无法为每条数据单独配置图例
  // 遍历数据，为每条数据配置series
  if (type === 'process') {
    roundCap = false;
    data.forEach((dataItem, index) => {
      baseOpt.series.push({
        type: 'bar',
        data: [dataItem.value],
        stack: 'a',
        roundCap,
        z: 2,
        coordinateSystem: 'polar',
        name: dataItem.name,
        beforeChangeValue: undefined
      });
    });
  } else if (type === 'base') {
    data.forEach((dataItem, index) => {
      let sum = 0;
      data.forEach(dataItem => {
        sum += dataItem.value;
      });
      const newData = cloneDeep(data);
      newData.forEach(newItem => {
        const newIndex = data.length - 1 - index;
        newItem.value = 0;
        if (newItem.name === dataItem.name) {
          newItem.value = dataItem.value;
        }
        newItem.itemStyle = {
          color: Array.isArray(color) ? getColor(color, newIndex) : color,
        };
        newItem.sum = sum;
        newItem.beforeChangeValue = undefined;
        newItem.index = newIndex;
      });
      baseOpt.series.push({
        type: 'bar',
        data: newData,
        stack: 'a',
        // 配置柱体两端是否圆角（在编辑器修改此属性重新调用echarts.setOption，但是视图未更新。bug）
        roundCap,
        z: 2,
        coordinateSystem: 'polar',
        name: dataItem.name,
      });
    });
  }


  // 自定义柱体最小占比
  handleMinRatio(iChartOption, baseOpt, type);

  // 配置展示每项data的名称,及显示层级
  setRadiusAxis(baseOpt, data, type, iChartOption);

  if (type === 'process') {
    baseOpt.series.forEach((item) => {
      item.showBackground = showBackground;
    });
  } else {
    let sum = 0;
    // data中的每项如果没有children
    if (type === 'base') {
      // 是否显示柱条背景样式---补全75%数据及颜色
      if (showBackground) {
        // 当数据全为0时，手动设置sum和max使其不为0，避免视图丢失
        if (baseOpt.angleAxis.sum === 0) {
          baseOpt.angleAxis.sum = 1;
          baseOpt.angleAxis.max = 4 / 3;
        }
        const newData = cloneDeep(data);
        newData.forEach(newItem => {
          newItem.itemStyle = {
            color: chartToken.itemColor,
          };
          newItem.value = baseOpt.angleAxis.sum - newItem.value;
          newItem.sum = 0;
        });
        baseOpt.series[data.length] = {
          type: 'bar',
          data: newData,
          stack: 'a',
          z: 1,
          roundCap,
          coordinateSystem: 'polar',
          // 关闭灰色进度鼠标hover事件
          silent: true,
        };
      }
    } else {
      // data中的value是数组类型，处理数据;配置初始数据及颜色;获取图例type，后续赋给series
      let legendData = [];
      data.forEach(dataItem => {
        dataItem.children.forEach(child => {
          sum += child.value;
        });
      });
      data.forEach(dataItem => {
        dataItem.children.forEach(child => {
          child.sum = sum;
          legendData.push(child.type);
        });
      });
      // 添加series中的数据
      legendData = Array.from(new Set(legendData));
      createSeries(iChartOption, baseOpt, sum, legendData);
      // 配置图例颜色
      baseOpt.color = color;
    }
  }
}

// 对非堆叠类型数据取反（已对iChartOption进行深拷贝），实现数据从外向内展示（echarts默认为内向外）
export function reverseData(iChartOption) {
  const { type = 'base', data } = iChartOption;
  let noChildData = data.every(item => (!item.children || !item.children.length));
  if (type === 'base' || noChildData) {
    iChartOption.data = iChartOption.data.reverse();
  }
};
