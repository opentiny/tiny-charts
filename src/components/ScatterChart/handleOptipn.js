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
import xAxis from '../../option/config/xAxis';
import yAxis from '../../option/config/yAxis';
import grid from '../../option/config/grid';
import tooltip from '../../option/config/tooltip';
import defendXSS from '../../util/defendXSS';
import { CHART_TYPE } from '../../util/constants';

/**
 * Tips提示框回调函数
 */
function toolTipFormatter(params) {
  const data = params.data;
  const [x, y, name] = data;
  let htmlStrings = `<div style="margin-bottom:4px;">
  名称${name || ''}
                            </div>`;
  htmlStrings += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">x维度</span>
                                <span>${defendXSS(x)}</span>
                            </div>`;
  htmlStrings += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">y维度</span>
                                <span>${defendXSS(y)}</span>
                            </div>`;
  return htmlStrings;
}

function handleXaxis(baseOpt, iChartOpt) {
  const basicXaxis = xAxis(iChartOpt);
  basicXaxis[0].type = 'value';
  baseOpt.xAxis = basicXaxis;
}

function handleYaxis(baseOpt, iChartOpt) {
  const basicYaxis = yAxis(baseOpt, iChartOpt, CHART_TYPE.SCATTER);
  baseOpt.yAxis = basicYaxis;
}

function handleTooltip(baseOpts, iChartOpt) {
  const basicTooltip = tooltip(iChartOpt, CHART_TYPE.SCATTER);
  if (!iChartOpt.tipHtml && !iChartOpt?.tooltip?.formatter) {
    basicTooltip.formatter = toolTipFormatter;
  }
  basicTooltip.trigger = 'item';
  baseOpts.tooltip = basicTooltip;
}

function handleGrid(baseOpt, iChartOpt) {
  const basicGrid = grid(iChartOpt);
  baseOpt.grid = basicGrid;
}

export { handleXaxis, handleYaxis, handleGrid, handleTooltip };
