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
import * as echarts from 'echarts';
import chartToken from './chartToken';
import { isArray } from '../../util/type'
import { getColor } from '../../util/color';

// 针对数据系列单独设置趋势线
function setSeparateTrendLine(legendData, iChartOption, option) {
  const { trendLineConfig, data, color } = iChartOption
  trendLineConfig.forEach((item,index) => {
     //dataset中原有就有一条数据集用于visualmap，此处索引从1开始
    const setIndex=index+1
    const { dataName, ...other } = item
    if (dataName && legendData.includes(dataName)) {
      const dataIndex = legendData.indexOf(dataName)
      const lineColor = getColor(color, dataIndex)
      const setUnit = {
        source: data[dataName]
      }
      option.dataset.push(setUnit);
      option.dataset.push({
        transform: {
          type: 'ecStat:regression',
          config: other,
        },
        fromDatasetIndex:setIndex*2-1
      });
      // 趋势线
      option.series.push({
        name: 'trendline',
        type: 'line',
        smooth: true,
        datasetIndex: setIndex*2,
        symbolSize: 0.1,
        symbol: 'circle',
        label: {
          show: true,
          fontSize: 14,
          color: chartToken.labelColor,
        },
        labelLayout: {
          dx: -20,
        },
        encode: {
          label: 2,
          tooltip: 1,
        },
        silent: true,
        itemStyle: {
          color: lineColor
        }
      })

    }
  })
}



/**
 * 针对趋势线需求，图表需要进行特殊处理
 */
export function handleTrendLine(option, iChartOption, plugins, legendData) {
  const ecStat = plugins.ecStat;
  if (iChartOption.trendLineConfig) {
    if (ecStat) {
      echarts.registerTransform(ecStat.transform.regression);
      const isArrayConfig = isArray(iChartOption.trendLineConfig)
      if (isArrayConfig) {
        setSeparateTrendLine(legendData, iChartOption, option)
      } else {
        // 集合数据
        option.dataset.push({
          transform: {
            type: 'ecStat:regression',
            config: iChartOption.trendLineConfig,
          },
        });
        // 趋势线
        option.series.push({
          name: 'trendline',
          type: 'line',
          smooth: true,
          datasetIndex: 1,
          symbolSize: 0.1,
          symbol: 'circle',
          label: {
            show: true,
            fontSize: 14,
            color: chartToken.labelColor,
          },
          labelLayout: {
            dx: -20,
          },
          encode: {
            label: 2,
            tooltip: 1,
          },
          silent: true,
        });
      }
    } else {
      throw new Error('您必须安装echarts-stat才可以使用趋势线功能');
    }
  }
}



