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
import Theme from '../../feature/token'
import chartToken from './chartToken';

// 雷达坐标系基础配置
function getRadar() {
    return {
        // 雷达坐标系位置
        center: ['50%', '50%'],
        // 雷达坐标系半径
        radius: '50%',
        // 指示器名称与轴的距离
        axisNameGap: 15,
        // 指示器轴的分割段数
        splitNumber: 4,
        shape: 'circle',
        // 坐标轴的标签是否响应和触发鼠标事件
        triggerEvent: false,
        // 坐标轴射线
        axisLine: {
            lineStyle: {
                color: Theme.config.radarAxisLineColor,
                width: Theme.config.radarAxisLineWidth,
                type: Theme.config.radarAxisLineType,
            },
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: Theme.config.radarAxisTickLineColor,
                width: Theme.config.radarAxisTickLineWidth,
                type: Theme.config.radarAxisTickLineType
            }
        },
        // 坐标轴射线的刻度,只显示一条射线的刻度,其他射线的刻度需要在指示器数据indicator中每项单独配置axisLabel: { show: false }
        axisLabel: {
            show: false,
            margin: -20,
            color: Theme.config.radarAxisLabelColor,
            fontSize: Theme.config.radarAxisLabelFontSize
        },
        // 坐标轴圆环分隔区域填充
        splitArea: { show: false },
        // 坐标轴圆环分隔线
        splitLine: {
            lineStyle: {
                color: Theme.config.radarSplitLineColor,
                width: Theme.config.radarSplitLineWidth,
                type: Theme.config.radarSplitLineType,
            },
        },
        // 坐标轴数据
        indicator: undefined,
        // 指示器名称样式设置
        axisName: {
            show: true,
            color: Theme.config.radarAxisNameColor,
            fontSize: Theme.config.radarAxisNameFontSize,
        },
    }
}

// 阈值线雷达坐标系基础配置
function getMarkRadarOption() {
    return {
        center: undefined,
        // 阈值线的radius应该是一个百分比，或者是实际的像素值
        radius: undefined,
        splitNumber: 1,
        shape: 'circle',
        axisName: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitArea: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: Theme.config.radarSplitLineWidth,
                color: Theme.config.colorState.colorError,
                type: 'dashed',
            },
        },
        indicator: undefined,
    };
}


function getRedPointerRadar() {
    return {
        // 雷达位置，保持和初始坐标系一致，
        center: ['50%', '50%'],
        // 雷达半径，保持和初始坐标系一致，
        radius: '50%',
        // 控制指示器名称是否显示
        axisName: {
            show: false,
        },
        startAngle: undefined, // 轴线的角度根据需求自己定义,起始点是水平方向
        // 指示器轴的分割段数，和初始坐标轴一致
        splitNumber: 4,
        shape: 'circle',
        // 坐标轴圆环分隔区域填充
        splitArea: {
            show: false,
        },
        // 坐标轴射线
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        // 坐标轴圆环分隔线
        splitLine: {
            show: false,
        },
        indicator: undefined,
    };
}

// 雷达图基础series配置
function getSeriesUnit() {
    return {
        type: 'radar',
        name: 'data',
        // 使用的雷达坐标系
        radarIndex: 0,
        // 拐点的标记大小(常规减去2是为了阈值状态下hover能盖住原有symbol点)
        symbolSize: chartToken.symbolSize - 2,
        // 拐点样式
        itemStyle: {
            // 常规场景不显示边框
            borderWidth: chartToken.itemBorderWidth,
            // borderWidth常规为0，此处设置borderColor为透明色+是为了避免hover移出symbol瞬间白色闪烁的问题
            borderColor: chartToken.itemBorderColor,
        },
        // 填充面积
        areaStyle: {
            opacity: 0.15,
        },
        lineStyle: {
            width: chartToken.lineWidth,
        },
        // 高亮的样式
        emphasis: {
            focus: 'none',
            areaStyle: {
                opacity: 0.3,
            },
            itemStyle: {
                color: chartToken.emphasisItemColor,
                borderWidth: chartToken.emphasisItemBorderWidth,
                // borderColor颜色在各系列数据中单独设置
            }
        },
        data: undefined,
    };
};

//  自定义阈值线雷达图基础series配置
function getThresholdSeries() {
    return {
        type: 'radar',
        symbol: 'none',
        // 拐点大小
        symbolSize: chartToken.symbolSize,
        silent: true,
        // 使用的雷达坐标系的索引
        radarIndex: 1,
        areaStyle: {
            color: chartToken.areaColor,
        },
        lineStyle: {
            color: Theme.config.colorState.colorError,
            width: chartToken.lineWidth,
            type: 'dashed',
        },
        data: undefined,
    };
}


//  阈值线雷达图红点基础series配置
function handleRedPointerSeries(index, dataValue, seriesName, isgradient = false) {
    const { colorError } = Theme.config.colorState
    return {
        name: 'threshold',
        type: 'radar',
        // 拐点大小
        symbolSize: chartToken.symbolSize,
        // 图形响应和触发鼠标事件
        silent: false,
        z: 99,
        // 使用的雷达坐标系的索引
        radarIndex: (isgradient ? 1 : 2) + index,
        // 拐点的样式
        itemStyle: {
            color: colorError,
            // borderWidth常规为0，此处设置borderColor为透明色是为了避免hover移出symbol瞬间白色闪烁的问题
            borderColor: chartToken.itemBorderColor,
            borderWidth: chartToken.itemBorderWidth,
        },
        lineStyle: {
            width: chartToken.thresholdLineWidth,
        },
        emphasis: {
            focus: 'none',
            itemStyle: {
                color: chartToken.emphasisItemColor,
                borderWidth: chartToken.emphasisItemBorderWidth,
                borderColor: colorError
            }
        },
        data: [
            {
                value: dataValue,
                name: seriesName, // 数据的名称，为了图例的点击消失生效，和系列的名字保持一致
            },
        ],
    };
}

export default getRadar
export { getMarkRadarOption, getThresholdSeries, getSeriesUnit, getRedPointerRadar, handleRedPointerSeries }

