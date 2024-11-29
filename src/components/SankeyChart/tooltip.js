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
import defendXSS from '../../util/defendXSS';
import { CHART_TYPE } from '../../util/constants';

function defaultFormatter(params, iChartOption) {
  const { emptyStatus = 'node' } = iChartOption;
  let htmlString = '';
  if (params.name.includes('>')) {
    params.name = params.name.replace('>', '---');
  }
  const value = params.data.empty ? 0 : (params.data.value || params.value);
  if (emptyStatus === 'node' && params.dataType === 'edge' && value === 0) { // 如果空值只展示节点，则连线的tooltip不展示
    return;
  }
  htmlString +=
    `<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">${defendXSS(params.name)}</span>` +
    '<br/>' +
    '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
    'value' +
    `  :  ${defendXSS(value)}</span>`;
  return htmlString;
}

function handleSankeyFormatter(formatter, sankeyTooltip, iChartOption) {
  if (formatter) {
    sankeyTooltip.formatter = formatter;
  } else {
    sankeyTooltip.formatter = params => {
      // 如果是虚拟节点则不展示toolTip
      let html = defaultFormatter(params, iChartOption);
      return html;
    };
  }
}

// 配置桑基图的自定义悬浮提示框
export function setTooltip(iChartOption, formatter, baseOpt) {
  const sankeyTooltip = tooltip(iChartOption,CHART_TYPE.SANKEY);
  handleSankeyFormatter(formatter, sankeyTooltip, iChartOption);
  sankeyTooltip.trigger = 'item';
  baseOpt.tooltip = sankeyTooltip;
}