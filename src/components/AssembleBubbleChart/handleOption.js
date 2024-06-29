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
import tooltip from '../../option/config/tooltip';
import legend from '../../option/config/legend';
import defendXSS from '../../util/defendXSS';

// 配置图表图例位置信息
export function setLegend(iChartOption) {
  const { itemGap, itemWidth, itemHeight } = iChartOption.legend;
  const chartLegend = legend(iChartOption);
  chartLegend.itemGap = itemGap !== undefined ? itemGap : 28;
  chartLegend.itemWidth = itemWidth || 14;
  chartLegend.itemHeight = itemHeight || 14;
  Object.assign(chartLegend, iChartOption.legend);
  return chartLegend;
}

// 配置鼠标悬浮提示框
export function setTooltip(iChartOption) {
  const { tipHtml } = iChartOption;
  let formatter;
  if (tipHtml) {
    formatter = tipHtml;
  } else {
    formatter = params => {
      let htmlString = '';
      const bgColor = params.data.borderColor || params.data.color;
      htmlString +=
        `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color
        :${defendXSS(bgColor)};">` +
        '</span>' +
        `<span style="display:inline-block;margin-left:5px">${defendXSS(params.data.type)}</span>` +
        '<br/>' +
        `<span style="display:inline-block;">${defendXSS(params.data.label)}</span>` +
        `<span style="display:inline-block;margin-left:10px;">${defendXSS(params.data.value)}</span>` +
        '<br/>';
      return htmlString;
    };
  }
  return { ...tooltip(iChartOption), formatter, trigger: 'item' };
}
