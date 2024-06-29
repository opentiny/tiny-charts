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
import defendXSS from '../../util/defendXSS';
import chartToken from './chartToken';

/**
 * 给堆叠图的柱子中间加上空白缝隙, 处理柱子圆角的递进关系
 */
export function setStack(baseOption, iChartOption, legendData, seriesData) {
  const type = iChartOption.type;
  if (type && type === 'stack') {
    // 添加堆叠图空白缝隙
    baseOption.series.forEach(item => {
      item.itemStyle.borderWidth = chartToken.borderWidth;
      item.itemStyle.borderColor = chartToken.borderColor;
    });
    // 柱子圆角，上层数值为空时，圆角递进到下层
    const direction = iChartOption.direction;
    iChartOption.data.forEach((item, i) => {
      for (let j = legendData.length - 1; j >= 0; j--) {
        const name = legendData[j];
        if (item[name]) {
          seriesData[name][i] = {
            value: seriesData[name][i],
            itemStyle: {
              borderRadius:
                direction === 'horizontal'
                  ? [0, chartToken.borderRadius, chartToken.borderRadius, 0]
                  : [chartToken.borderRadius, chartToken.borderRadius, 0, 0],
            },
          };
          break;
        }
      }
    });
  }
}

// 将y轴文本都转为正数
function setAbsoluteYaxisLabel(baseOption) {
  const yAxis = baseOption.yAxis;
  yAxis.forEach(item => {
    item.axisLabel.formatter = value => {
      return Math.abs(value);
    };
  });
}

function setTipFormatter(params, ticket, callback) {
  let html = '';
  params.forEach((item, index) => {
    if (index === 0) {
      html += `<div style="margin-bottom:4px;">${defendXSS(item.name)}</div>`;
    }
    html += `<div>
                <span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${defendXSS(
      item.color,
    )};"></span>
                <span style="margin-left:5px;color:#000000">
                    <span style="display:inline-block; margin-right:8px;min-width:48px;">${defendXSS(
      item.seriesName,
    )}</span> 
                    <span style="font-weight:bold">${defendXSS(item.value ? Math.abs(item.value) : '-')}</span>
                </span>
            </div>`;
  });
  return html;
}

/**
 * 将所有y轴的label都转为正数
 * 内置好转为正数的tooltip
 */
export function setDoubleSides(baseOption, iChartOption) {
  const type = iChartOption.type;
  if (type && type === 'double-sides') {
    setAbsoluteYaxisLabel(baseOption)
    if (!baseOption.tooltip.formatter) {
      baseOption.tooltip.formatter = setTipFormatter
    }
  }
}

/**
 * 设置柱状图的方向
 */
export function setDirection(baseOption, direction) {
  if (direction && direction === 'horizontal') {
    const temp = baseOption.xAxis;
    baseOption.xAxis = baseOption.yAxis;
    baseOption.yAxis = temp;
  }
}
