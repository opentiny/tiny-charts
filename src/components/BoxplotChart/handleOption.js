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

/**
 * 设置图的方向
 */
export function setDirection(baseOption, direction) {
  if (direction && direction === 'horizontal') {
    const temp = baseOption.xAxis;
    baseOption.xAxis = baseOption.yAxis;
    baseOption.yAxis = temp;
  }
}

function tooltipFormatter(params) {
  const { data, color, seriesType } = params
  const labels = ['最大值', '上四分位数', '中位数', '下四分位数', '最小值'];
  const labeLen = labels.length
  let htmlString = '';
  if (seriesType === 'boxplot') {
    const arr = [];
    labels.forEach((item, index) => {
      htmlString = `<div>
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:4px;border-radius:5px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(color)};background-color:${defendXSS(color)};"></span>
                            <span style="display:inline-block;width:90px">${defendXSS(item)}:</span><span>${defendXSS(
        data[labeLen - index]
      )}</span>
                       </div>`;
      arr.push(htmlString);
    });
    htmlString = arr.join('<br/>');
  } else {
    htmlString = `<div>
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:4px;border-radius:5px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(color)};background-color:${defendXSS(color)};"></span>
                            <span style="display:inline-block;width:90px">离散点</span><span>${defendXSS(
      data[1]
    )}</span>
                       </div>`;
  }
  return htmlString;
}

/**
 * 配置默认的鼠标悬浮提示框
 */
export function setTooltip(baseOpt) {
  if (!baseOpt.tooltip.formatter) {
    baseOpt.tooltip.formatter = tooltipFormatter;
  }
}
