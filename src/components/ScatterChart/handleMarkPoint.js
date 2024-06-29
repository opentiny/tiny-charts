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
import Theme from '../../feature/token';
import { isObject } from '../../util/type';
import chartToken from './chartToken';

export default function handleMarkPoint(iChartOpt) {
  const markData = {};
  const series = [];
  const markPoint = iChartOpt.markPoint;
  const data = iChartOpt.data;
  data && isObject(data) && Object.keys(data).forEach(key => {
    let errorSeriesName = '';
    let errorSeriesData = [];
    data[key].forEach((item, index) => {
      markPoint && Object.keys(markPoint).forEach(v => {
        if (v === key) {
          const flagArr = [];
          markPoint[v].forEach((axis,i)=>{
            let flag = true;
            if (Number(item[i]) < Number(axis)) {
              flag = false;
            }
            flagArr.push(flag);
          })
          if(!flagArr.includes(false)){
            errorSeriesName = v;
            errorSeriesData.push(item);
            data[key].splice(index, 1);
          }
        }
      });
    });
    // 将超出临界值红点的数据放在一个图例里
    errorSeriesName && (markData[`${errorSeriesName}`] = errorSeriesData);
  });
  const {colorError}=Theme.config.colorState
  // 设置iChartOpt中超过markPoint点的数据
  Object.keys(markData).forEach(item => {
    const seriesItem = {
      // 将error的series数据和原图例的name保持一致，让echarts只渲染正确的图例数
      name: item,
      symbolSize: iChartOpt.symbolSize || 10,
      data: markData[item],
      type: 'scatter',
      emphasis: {
        focus: 'series',
        scale: 1.3,
        itemStyle: {
          color: chartToken.color,
          borderWidth: 4,
        }
      },
      itemStyle: {
        color:colorError,
        borderColor: colorError,
        borderWidth: 0,
      }
    };
    if (seriesItem.data.length) {
      series.push(seriesItem);
    }
  });
  return series;
}
