import merge from '../../../util/merge';
import { getColorBase } from '../util/theme';

/**
 * 给图例和x轴赋值
 * @param {*} baseOpt 
 * @param {*} legendData 
 * @param {*} xAxisData 
 */
export function handleData(baseOpt, legendData, xAxisData) {
    if (!baseOpt.legend.data) {
        baseOpt.legend.data = legendData;
    }
    baseOpt.xAxis.forEach((item, index) => {
        item.data = xAxisData;
    });
}

/**
 * tooltip 中数值部分添加单位
 * @param {*} baseOpt 
 * @param {*} iChartOpt 
 */
export function handleTooltipValue(baseOpt, iChartOpt) {
    const { tooltip } = iChartOpt;
    baseOpt.tooltip.valueFormatter = tooltip?.valueFormatter;
}

/**
 * 处理双向面积图的grid,grid为数组且length===2
 * @param {*} baseOpt 
 * @param {*} iChartOpt 
 * @param {*} baseGrid 
 */
export function handleGrid(baseOpt, iChartOpt, baseGrid) {
    const { grid } = iChartOpt;
    merge(baseGrid, grid);
    baseOpt.grid = baseGrid;
}

/**
 * 双向面积图特殊处理，xAXis为数组且length===2
 * @param {*} baseOpt 
 * @param {*} iChartOpt 
 * @param {*} baseXaxis 
 */
export function handleXaxis(baseOpt, iChartOpt, baseXaxis) {
    const { xAxis, theme } = iChartOpt;
    const colorBase = getColorBase(theme);
    baseXaxis[0].axisLabel.color = colorBase.axislabel;
    merge(baseXaxis, xAxis);
    baseOpt.xAxis = baseXaxis;
}

/**
 * 双向面积图特殊处理，yAXis为数组且length===2
 * @param {*} baseOpt 
 * @param {*} iChartOpt 
 * @param {*} baseYaxis 
 */
export function handleYaxis(baseOpt, iChartOpt, baseYaxis) {
    const { yAxis, theme } = iChartOpt;
    const colorBase = getColorBase(theme);
    baseYaxis.forEach((item, index) => {
        item.axisLabel.color = colorBase.axislabel;
        item.nameTextStyle.color = colorBase.axislabel;
        item.splitLine.lineStyle.color = colorBase.axis;
    });
    merge(baseYaxis, yAxis);
    baseOpt.yAxis = baseYaxis;
}

/**
 * 修改默认值。dataZoom鼠标滚动，上下区域同时缩放
 * @param {*} baseOpt 
 */
export function handleDataZoom(baseOpt) {
    baseOpt.dataZoom[0].xAxisIndex = [0, 1];
}
