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
import { changeRgbaOpacity } from '../../util/color';
import defendXSS from '../../util/defendXSS';
function tooltipFormatter(params) {
  const seriesName = params.seriesName;
  const color = params.color;
  const data = params.data;
  const [x, y, radius, name] = data;
  let htmlString = `<div style="margin-bottom:4px;">
                                ${defendXSS(seriesName)}
                         </div>`;
  htmlString += `<div style="margin-bottom:4px;">
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:8px;border-radius:5px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(changeRgbaOpacity(color, 1))};background-color:${defendXSS(
    color,
  )};"></span>
                            <span>${defendXSS(name)}</span>
                       </div>`;
  htmlString += `
            <div>
                <span style="display:inline-block;margin-right:8px;min-width:60px;">x维度</span> 
                <span>${defendXSS(x)}</span>
            </div>
        `;
  htmlString += `
            <div>
                <span style="display:inline-block;margin-right:8px;min-width:60px;">y维度</span> 
                <span>${defendXSS(y)}</span>
            </div>
        `;
  htmlString += `
            <div>
                <span style="display:inline-block;margin-right:8px;min-width:60px;">半径维度</span> 
                <span>${defendXSS(radius)}</span>
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