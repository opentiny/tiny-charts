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
import init from '../../option/init';
import { getSeriesData, getLabelData, setTooltip, setLabel } from './handleOption';
import { setSeries } from './handleSeries';
import PolarCoordSys from '../../option/PolarSys';
import { CHART_TYPE } from '../../util/constants';
import { mergeSeries } from '../../util/merge';
import AdaptivePolarSys from '../../option/PolarSys/adaptive';
import legend from '../../option/config/legend';

export default class PolarBarChart {

    static name = CHART_TYPE.POLAR_BAR

    constructor(iChartOption, chartInstance) {
        this.baseOption = {};
        this.iChartOption = {};
        // 组装 iChartOption, 补全默认值
        this.iChartOption = init(iChartOption);
        this.chartInstance = chartInstance;
        // 根据 iChartOption 组装 baseOption
        this.updateOption(chartInstance);
    }

    updateOption(chartInstance) {
        const iChartOption = this.iChartOption;
        const data = iChartOption.data;
        // 装载除series之外的其他配置
        PolarCoordSys(this.baseOption, iChartOption, CHART_TYPE.POLAR_BAR, chartInstance);
        const type = iChartOption.type || 'normal';
        // angleAxis赋值
        this.baseOption.angleAxis.data = [];
        if (type !== 'normal') {
            this.baseOption.angleAxis.axisLabel.show = true;
        }
        if (data) {
            data.forEach(item => {
                this.baseOption.angleAxis.data.push(item.name);
            });
            // tooltip悬浮框
            setTooltip(this.baseOption);
            // 调整label标签和图层的层级
            setLabel(this.baseOption);
            // legend数据
            this.baseOption.legend.data = type === 'normal' ? data : [];
            // series bar数据
            const seriesData = getSeriesData(data, type, iChartOption);
            // pie数据
            const labelData = getLabelData(data);
            this.baseOption.series = setSeries(seriesData, labelData, iChartOption, this.baseOption.polar, type, this.baseOption, chartInstance);
            // 合并用户自定义series
            mergeSeries(iChartOption, this.baseOption);
        }
    }

    // 根据渲染出的结果，二次计算option
    updateOptionAgain(echartsIns) {
        
        // 坐标轴二次计算
        AdaptivePolarSys(this.baseOption, this.iChartOption, echartsIns, 'polarBar')
    }

    resize(callback) {
        const {adaptive, theme} = this.iChartOption;
        const adaptiveCloud = adaptive && theme.includes('cloud');
        if (adaptiveCloud) {
            this.baseOption.legend = legend(this.iChartOption, 'PolarBarChart', this.chartInstance);
            const data = this.iChartOption.data;
            if (data) {
                const type = this.iChartOption.type || 'normal';
                const seriesData = getSeriesData(data, type, this.iChartOption);
                const labelData = getLabelData(data);
                this.baseOption.series = setSeries(seriesData, labelData, this.iChartOption, this.baseOption.polar, type, this.baseOption, this.chartInstance)
            }
        }
        callback(this.baseOption);
    }

    getOption() {
        return this.baseOption;
    }
}