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
/**
 * 针对趋势线需求，图表需要进行特殊处理
 */
export function handleTrendLine(option, iChartOption, plugins) {
  const ecStat = plugins.ecStat;
  if (iChartOption.trendLineConfig) {
    if (ecStat) {
      echarts.registerTransform(ecStat.transform.regression);
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
    } else {
      throw new Error('您必须安装echarts-stat才可以使用趋势线功能');
    }
  }
}
