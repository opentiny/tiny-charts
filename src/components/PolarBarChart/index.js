import init from '../../option/init';
import { event } from '../../util/event';
import { getSeriesData, getLabelData, setTooltip } from './handleOption';
import { setSeries } from './handleSeries';
import PolarCoordSys from '../../option/PolarCoordinateSystem';

const CHART_NAME = 'PolarBarChart';
export default class PolarBarChart {
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
        PolarCoordSys(this.baseOption, iChartOption, CHART_NAME);
        // angleAxis赋值
        this.baseOption.angleAxis.data = [];
        if (data) {
            data.forEach(item => {
                this.baseOption.angleAxis.data.push(item.name)
            });
            // tooltip悬浮框
            setTooltip(this.baseOption);
            // legend数据
            this.baseOption.legend.data = data;
            // series bar数据
            const seriesData = getSeriesData(data)
            // pie数据
            const labelData = getLabelData(data);
            this.baseOption.series = setSeries(seriesData, labelData, iChartOption, this.baseOption.polar);
        }

        // 配置图表事件
        if (iChartOption.event) {
            event(chartInstance, iChartOption.event);
        }
    }
    getOption() {
        return this.baseOption;
    }
}