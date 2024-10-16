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
import { setSeries } from './handleSeries';
import merge from '../../util/merge';
import PolarCoordSys from '../../option/PolarSys';
import { CHART_TYPE } from '../../util/constants';

export default class SunburstChart {

    static name = CHART_TYPE.SUNBURST


    constructor(iChartOption, chartInstance) {
        this.baseOption = {};
        this.iChartOption = {};
        this.iChartOption = init(iChartOption);
        this.updateOption(chartInstance);
    }
    updateOption(chartInstance) {
        const iChartOption = this.iChartOption;
        // 装载除series之外的其他配置
        PolarCoordSys(this.baseOption, iChartOption, CHART_TYPE.SUNBURST);
        this.baseOption.color = ['', ...iChartOption.color];
        this.baseOption.series = setSeries(iChartOption);
        // 合并用户自定义series
        merge(this.baseOption.series, iChartOption.series);
    }
    getOption() {
        return this.baseOption;
    }
}