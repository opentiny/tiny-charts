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
import { isObject, isArray } from './type';
import Theme from '../feature/token';
import { CHART_TYPE } from './constants';

const DEFAULT_KEY = 'product';

const getDatasetData = option => {
  if (option.dataset && option.dataset.source) {
    const source = option.dataset.source;
    const headers = source[0];
    let data = [];

    // source为二维数组，需要将二维数组转对象数组，转成标准的data格式
    if (isArray(headers)) {
      data = source.slice(1).map(row => {
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = row[index];
        });
        return obj;
      })
    } else if (isObject(headers)) {
      data = source;
    }
    option.data = data;
    const series = option.series;
    // series.encode维度映射
    if (series && isArray(series) && series[0].encode) {
      const encode = series[0].encode;
      option.direction = 'horizontal';
      const chartToken = Theme.getChartTokenByName(CHART_TYPE.BAR);
      series[0].itemStyle = {
        borderRadius: [0, chartToken.borderRadius, chartToken.borderRadius, 0],
      }
      xAxisName(option, encode.y)
      const encodeKeys = [encode.x, encode.y];
      option.data.forEach(item => {
        Object.keys(item).forEach(key => {
          if (!encodeKeys.includes(key)) {
            delete item[key]
          }
        })
      })
    } else {
      xAxisName(option, DEFAULT_KEY)
    }
    return option;
  }
  return option;
};

const xAxisName = (option, name) => {
  if (option.xAxis) {
    option.xAxis.data = name;
  } else {
    option.xAxis = {
      data: name
    }
  }
}

export { getDatasetData }


