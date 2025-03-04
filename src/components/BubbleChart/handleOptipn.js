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
import chartToken from './chartToken';
import { changeRgbaOpacity } from '../../util/color';
import defendXSS from '../../util/defendXSS';
function tooltipFormatter(params) {
  const { tipSeriesNameColor, tipNameColor, tipValueColor } = chartToken;
  const seriesName = params.seriesName;
  const color = params.color;
  const data = params.data;
  const [x, y, radius, name] = data;
  let htmlString = `<div style="margin-bottom:4px;color:${tipSeriesNameColor};">
                                ${defendXSS(seriesName)}
                         </div>`;
  htmlString += `<div style="margin-bottom:4px;">
                            <span style="display:inline-block;width:8px;height:8px;
                            margin-right:8px;border-radius:4px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(changeRgbaOpacity(color, 1))};background-color:${defendXSS(
    color,
  )};"></span>
                            <span style="color:${tipValueColor};>${defendXSS(name)}</span>
                       </div>`;
  htmlString += `
            <div>
                <span style="display:inline-block;margin-right:8px;min-width:60px;color:${tipNameColor};">x维度</span> 
                <span style="color:${tipValueColor};>${defendXSS(x)}</span>
            </div>
        `;
  htmlString += `
            <div>
                <span style="display:inline-block;margin-right:8px;min-width:60px;color:${tipNameColor};">y维度</span> 
                <span style="color:${tipValueColor};>${defendXSS(y)}</span>
            </div>
        `;
  htmlString += `
            <div>
                <span style="display:inline-block;margin-right:8px;min-width:60px;color:${tipNameColor};">半径维度</span> 
                <span style="color:${tipValueColor};>${defendXSS(radius)}</span>
            </div>
        `;
  return htmlString;
}

/**
 * 配置默认的鼠标悬浮提示框
 */
export function setTooltip(baseOpt, iChartOption) {
  baseOpt.tooltip.trigger = 'item';
  if (iChartOption.trigger==='axis') {
    baseOpt.tooltip.trigger = 'axis';
    baseOpt.tooltip.axisPointer.type = 'shadow';
  }
  if (!baseOpt.tooltip.formatter) {
    baseOpt.tooltip.formatter = tooltipFormatter;
  }
}