import init from '../../option/init';
import { event } from '../../util/event';
import { getSeriesData, setTooltip } from './handleOption';
import { setSeries } from './handleSeries';
import PolarCoordSys from '../../option/PolarCoordinateSystem';

const CHART_NAME = 'CircleProcessChart';
export default class CircleProcessChart {
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
        // 装载除series之外的其他配置
        PolarCoordSys(this.baseOption, iChartOption, CHART_NAME);
        // tooltip悬浮框
        setTooltip(this.baseOption);
        // legend数据
        this.baseOption.legend.data = iChartOption.data;
        // series bar数据
        const seriesData = getSeriesData(iChartOption.data);
        this.baseOption.series = setSeries(seriesData, iChartOption);
        // 配置图表事件
        if (iChartOption.event) {
            event(chartInstance, iChartOption.event);
        }
    }
    getOption() {
        return this.baseOption;
    }
}