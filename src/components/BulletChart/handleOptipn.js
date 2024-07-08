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
import defendXSS from '../../util/defendXSS';
import { CHART_TYPE } from '../../util/constants';

/**
 * Tips提示框回调函数
 */
 function toolTipFormatter(params) {
    
	// 矩形部分不显示toolTip
	if(params.seriesIndex > 1) {
		return
	}
  let htmlString = `<div style="margin-bottom:4px;">${defendXSS(params.name)}</div>`;
	htmlString += `
		<div>
			<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${defendXSS(
				params.color,
				)};">
			</span>
			<span style="margin-left:5px;">
                            <span style="display:inline-block;margin-right:8px;min-width:60px;">${defendXSS(
        params.seriesName,
      )}</span>
			<span style="font-weight:bold">
				${defendXSS(params.value)}
			</span>
		</div>
	`
  return htmlString;
}

function handleXaxis(baseOpt, iChartOpt) {
  const basicXaxis = xAxis(iChartOpt);
  basicXaxis[0].type = 'value';
  basicXaxis[0].axisLine.show = false;
  baseOpt.xAxis = basicXaxis;
}

function handleYaxis(baseOpt, iChartOpt) {
  const basicYaxis = yAxis(baseOpt, iChartOpt, CHART_TYPE.BULLET);
  baseOpt.yAxis = basicYaxis;
}

function handleTooltip(baseOpts, iChartOpt) {
  if (!iChartOpt.tipHtml && !iChartOpt?.tooltip?.formatter) {
    baseOpts.tooltip.formatter = toolTipFormatter;
  }
}

/**
 * 设置柱状图的方向
 */
function setDirection(baseOption, direction) {
  if (direction && direction === 'horizontal') {
    const temp = baseOption.xAxis;
    baseOption.xAxis = baseOption.yAxis;
    baseOption.yAxis = temp;
  }
}

export { handleXaxis, handleYaxis, handleTooltip, setDirection};
