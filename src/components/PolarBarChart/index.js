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
import { getSeriesData, getLabelData, setTooltip } from './handleOption';
import { setSeries } from './handleSeries';
import PolarCoordSys from '../../option/PolarSys';
import { CHART_TYPE } from '../../util/constants';

export default class PolarBarChart {

    static name = CHART_TYPE.POLAR_BAR

    constructor(iChartOption, chartInstance) {
        this.baseOption = {};
        this.iChartOption = {};
        // 组装 iChartOption, 补全默认值
        this.iChartOption = init(iChartOption);
        // 根据 iChartOption 组装 baseOption
        this.updateOption(chartInstance);
    }

    updateOption(chartInstance) {
        const iChartOption = this.iChartOption;
        const data = iChartOption.data;
        // 装载除series之外的其他配置
        PolarCoordSys(this.baseOption, iChartOption, CHART_TYPE.POLAR_BAR);
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
            // legend数据
            this.baseOption.legend.data = type === 'normal' ? data : [];
            // series bar数据
            const seriesData = getSeriesData(data, type);
            // pie数据
            const labelData = getLabelData(data);
            this.baseOption.series = setSeries(seriesData, labelData, iChartOption, this.baseOption.polar, type);
        }
    }
    getOption() {
        return this.baseOption;
    }
}