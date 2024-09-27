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
import { SYMBOLCOLOR, CHARTTYPE } from './BaseOption';
import xAxis from '../../option/config/xAxis';
import yAxis from '../../option/config/yAxis';
import grid from '../../option/config/grid';
import tooltip from '../../option/config/tooltip';
import defendXSS from '../../util/defendXSS';
import { CHART_TYPE } from '../../util/constants';

function setHeatMapDeaultIchartOption(iChartOpt) {
  if (!iChartOpt.color) {
    iChartOpt.color = SYMBOLCOLOR[iChartOpt.type];
  }
  const padding = iChartOpt.chartPadding || iChartOpt.padding;
  if (!padding && iChartOpt.type === CHARTTYPE[1]) {
    iChartOpt.padding = iChartOpt.handle ? [50, 120, 20, 20] : [50, 30, 20, 20];
  }
}

/**
 * 矩形热力图自定义提示框回调函数
 */
function rectangularFormatter(params) {
  const color = params.color;
  const data = params.data;
  const [x, y, z, name] = data;
  let htmlString = `<div style="margin-bottom:4px;">
                                矩形热力图
                            </div>`;
  htmlString += `<div style="margin-bottom:4px;">
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:8px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(changeRgbaOpacity(color, 1))};background-color:${defendXSS(
    color,
  )};"></span>
                            <span>${defendXSS(name)}</span>
                        </div>`;
  htmlString += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">x维度</span> 
                                <span>${defendXSS(x)}</span>
                            </div>`;
  htmlString += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">y维度</span> 
                                <span>${defendXSS(y)}</span>
                            </div>`;
  htmlString += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;
                                min-width:60px;">透明度维度</span> 
                                <span>${defendXSS(z)}</span>
                            </div>`;
  return htmlString;
}

/**
 * 日历热力图自定义提示框回调函数
 */
function calendarFormatter(params) {
  const color = params.color;
  const data = params.data;
  const name = params.name;
  const [, , z] = data;
  let htmlDom = `<div style="margin-bottom:4px;">
                                日历热力图
                            </div>`;
  htmlDom += `<div style="margin-bottom:4px;">
                            <span style="display:inline-block;width:10px;
                            height:10px;margin-right:8px;border-style: solid;
                            border-width:1px;border-color:${defendXSS(
    changeRgbaOpacity(color, 1),
  )};background-color:${defendXSS(color)};"></span>
                            <span>${defendXSS(name)}</span>
                        </div>`;
  htmlDom += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;
                                min-width:60px;">Value</span> 
                                <span>${defendXSS(z)}</span>
                            </div>`;
  return htmlDom;
}

/**
 * 蜂窝热力图自定义提示框回调函数
 */
function hexagonFormatter(params) {
  const color = params.color;
  const data = params.data;
  const [x, y, z, name] = data;
  let html = `<div style="margin-bottom:4px;">
                            蜂窝热力图
                            </div>`;
  html += `<div style="margin-bottom:4px;">
                            <span style="display:inline-block;width:10px;
                            height:10px;margin-right:8px;border-style: solid;
                            border-width:1px;border-color:${defendXSS(
    changeRgbaOpacity(color, 1),
  )};background-color:${defendXSS(color)};"></span>
                            <span>${defendXSS(name)}</span>
                        </div>`;
  html += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">x维度</span> 
                                <span>${defendXSS(x)}</span>
                            </div>`;
  html += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">y维度</span> 
                                <span>${defendXSS(y)}</span>
                            </div>`;
  html += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">颜色维度</span> 
                                <span>${defendXSS(z)}</span>
                            </div>`;
  return html;
}


const heatMapTooltipFormatter = {
  RectangularHeatMapChart: rectangularFormatter,
  CalendarHeatMapChart: calendarFormatter,
  HexagonHeatMapChart: hexagonFormatter,
};

function setTooltip(baseOpt, iChartOpt, type) {
  function setChartTooltip(opt) {
    if (!iChartOpt.tipHtml && !iChartOpt?.tooltip?.formatter) {
      opt.formatter = heatMapTooltipFormatter[type];
    }
  }
  baseOpt.tooltip = tooltip(iChartOpt, CHART_TYPE.HEAT_MAP, setChartTooltip);
}

function handleCalendarYaxis(yAxis, data) {
  yAxis.type = 'category';
  yAxis.data = data[1];
  yAxis.splitLine.show = false;
  yAxis.axisLine.show = true
}

function handleHexagonYaxis(yAxis, data) {
  yAxis.splitLine.show = false;
  yAxis.axisLabel.show = false;
  yAxis.min = 0;
  yAxis.max = data[2];
}

// y轴的处理函数
const yAxisHandler = {
  CalendarHeatMapChart: handleCalendarYaxis,
  HexagonHeatMapChart: handleHexagonYaxis,
};

function setYaxis(baseOpt, iChartOpt, chartType, data) {
  function setChartYaxis(opt, index) {
    if (chartType !== CHARTTYPE[0] && index === 0) {
      yAxisHandler[chartType](opt, data);
    }
  }
  baseOpt.yAxis = yAxis(baseOpt, iChartOpt, CHART_TYPE.HEAT_MAP, setChartYaxis);
}

function handleRectangularXaxis(xAxis) {
  xAxis.type = 'value';
  xAxis.axisLine.show = false;
}

function handleCalendarXaxis(xAxis, data) {
  xAxis.data = data[0];
  xAxis.axisTick.show = false;
}

function handleHexagonXaxis(xAxis, data) {
  xAxis.type = 'value';
  xAxis.axisLine.show = false;
  xAxis.axisTick.show = false;
  xAxis.axisLabel.show = false;
  xAxis.min = 0;
  xAxis.max = data[1];
}

// x轴的处理函数
const xAxisHandler = {
  RectangularHeatMapChart: handleRectangularXaxis,
  CalendarHeatMapChart: handleCalendarXaxis,
  HexagonHeatMapChart: handleHexagonXaxis,
};

function setXaxis(baseOpt, iChartOpt, chartType, data) {
  function setChartXaxis(opt, index) {
    if (index === 0) xAxisHandler[chartType](opt, data);
  }
  baseOpt.xAxis = xAxis(iChartOpt, setChartXaxis);
}

function setGrid(baseOpt, iChartOpt) {
  const basicGrid = grid(iChartOpt);
  baseOpt.grid = basicGrid;
}

function initRectSys(baseOpt, iChartOpt, chartType, data) {
  baseOpt.color = iChartOpt.color;
  // 设置chartpadding
  setGrid(baseOpt, iChartOpt);
  // 图表x轴
  setXaxis(baseOpt, iChartOpt, chartType, data)
  // 图表y轴
  setYaxis(baseOpt, iChartOpt, chartType, data);
  // 图表鼠标悬浮提示框
  setTooltip(baseOpt, iChartOpt, chartType);
}

export { setHeatMapDeaultIchartOption, initRectSys };
