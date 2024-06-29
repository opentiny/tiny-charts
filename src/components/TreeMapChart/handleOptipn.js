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
import grid from '../../option/config/grid';
import tooltip from '../../option/config/tooltip';
import defendXSS from '../../util/defendXSS';

/**
 * Tips提示框回调函数
 */
function toolTipFormatter(params) {
  const data = params.data;
  const { value, name } = data;
  let htmlString = `<div style="margin-bottom:4px;">
  树节点${name || ''}
                            </div>`;
  htmlString += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">value:</span>
                                <span>${defendXSS(value)}</span>
                            </div>`;
  return htmlString;
}

function handleGrid(baseOpt, iChartOpt) {
  const basicGrid = grid(iChartOpt);
  baseOpt.grid = basicGrid;
}

/**
 * 是否配置标题和标题样式
 */
function handleTitle(baseOpt, iChartOpt) {
  if (iChartOpt.title) {
    baseOpt.title = iChartOpt.title;
  }
}

function handleTooltip(baseOpt, iChartOpt) {
  const basicTooltip = tooltip(iChartOpt);
  if (!iChartOpt.tipHtml && !iChartOpt?.tooltip?.formatter) {
    basicTooltip.formatter = toolTipFormatter;
  }
  basicTooltip.trigger = 'item';
  baseOpt.tooltip = basicTooltip;
}

export { handleGrid, handleTooltip, handleTitle };
