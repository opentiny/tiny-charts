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
import { codeToRGB } from '../../util/color';
import merge from '../../util/merge';
import chartToken from './chartToken';
import { isArray } from '../../util/type';
import Theme from '../../feature/token';

// 设置背景色颜色
function handleSetColor(data,opacity) {
    const { colorState } = Theme.config
    const stateColorGroup = {
        info: colorState.colorInfo,
        error: colorState.colorError,
        warning: colorState.colorAlert,
        subwarning: colorState.colorWarning,
        success: colorState.colorSuccess,
    };
    
    let backgroundColor;
    if(data.color) {
        backgroundColor = data.color
    } else {
        backgroundColor = stateColorGroup[data.name] ?  codeToRGB(stateColorGroup[data.name],opacity) : ''
    }
    return backgroundColor;
}

function handleLabel(barData,iChartOpt,baseOpt) {
    const label = iChartOpt.label;
    const { colorBoard } = Theme.config;
    const orange = colorBoard.orange.colorOrange40;
    const green = colorBoard.green.colorGreen40;
    let labelOption = label;
    if (labelOption && labelOption.show) {
        let showLabelArr = [];
        barData.forEach((item,index) => {
            let markLineNum = isArray(iChartOpt.markLine.data) ? iChartOpt.markLine.data[index] : iChartOpt.markLine.data;
            let showLabel = Math.round((item - markLineNum) / markLineNum * 100);
            showLabelArr.push(showLabel);
        })
        // 柱子显示文本固定显示在最上方
        let categoryX = {
            type: 'category',
            position: 'top',
            data: showLabelArr,
            axisLabel: {
                show:true,
                fontSize: chartToken.fontSize,
                formatter: (value)=>{
                    return value + '%'
                },
                color: (value)=>{
                    return value >= 0 ? green : orange;
                }
            },
            axisLine: {
                show:false
            },
            axisTick: {
                show:false
            },
        }
        baseOpt.xAxis.push(categoryX);
    }
}

export function handleSeries(baseOpt, iChartOpt, legendData ,seriesData) {
    const series = [];
    const barWidth = iChartOpt.itemStyle?.barWidth ? iChartOpt.itemStyle.barWidth : chartToken.barWidth;
    const backgroundWidth = iChartOpt.itemStyle?.backgroundWidth ? iChartOpt.itemStyle.backgroundWidth : chartToken.barBgWidth;
    const barData = seriesData[legendData[0]];
    const radius = chartToken.borderRadius;
    let borderRadius = [radius, radius, 0, 0];
    if(iChartOpt.direction === 'horizontal') {
        borderRadius = [0, radius, radius, 0];
    }

    const barObj = {
        name: legendData[0],
        type: 'bar',
        barWidth: barWidth,
        z: 10,
        data: barData,
        symbol: 'rect',
        symbolRepeat: false,
        itemStyle: {
            borderRadius: borderRadius
        }
    }
    // 设置图例
    handleLabel(barData,iChartOpt,baseOpt);
    const markLineData = isArray(iChartOpt.markLine.data) ? iChartOpt.markLine.data : iChartOpt.data.map(() => { return iChartOpt.markLine.data });
    // 设置阈值
    const scatterObj = {
        type: 'scatter',
        symbol: 'rect',
        silent: true,
        symbolSize: iChartOpt.markLine.symbolSize ? iChartOpt.markLine.symbolSize : [32, 2],
        symbolOffset: iChartOpt.markLine.symbolOffset ? iChartOpt.markLine.symbolOffset : [0, 0],
        z: 20,
        data: markLineData,
        color: iChartOpt.markLine.color ? iChartOpt.markLine.color : handleSetColor(iChartOpt.markLine,1),
        emphasis: {
            scale: false
        }
    }
    // 设置柱子背景
    if(iChartOpt.background) {
        iChartOpt.background.forEach(item => {
            const rectData = isArray(item.data) ? item.data : iChartOpt.data.map(() => { return item.data });
            let totalData = {
                type: 'bar',
                barWidth: backgroundWidth,
                stack: 'total',
                data: rectData,
                color: iChartOpt.theme.indexOf('dark')!== -1 ? handleSetColor(item,0.3) : handleSetColor(item,0.15),
                barGap: 0
            }
            if(iChartOpt.direction === 'horizontal') {
                totalData.yAxisIndex = 1;
            } else {
                totalData.xAxisIndex = 1;
            }
            series.push(totalData);
        });
        let xaxisData = Object.assign({},baseOpt.xAxis[0]);
        xaxisData.show = false;
        baseOpt.xAxis.push(xaxisData);
    }
    series.unshift(scatterObj);
    series.unshift(barObj);
    baseOpt.series = series;
}