import cloneDeep from '../../../util/cloneDeep';
import { baseOption, baseGrid, baseXaxis, baseYaxis } from './baseOption';
import init from '../../../option/init';
import RectCoordSys from '../../../option/RectangularCoordinateSystem';
import { handleData, handleTooltipValue, handleGrid, handleXaxis, handleYaxis, handleDataZoom } from './handleOption';
import { handleSeries } from './handleSeries';
import { xkey, xdata, ldata, ydata } from '../../../option/RectangularCoordinateSystem';
import { event } from '../../../util/event';

class DoubleSidesAreaChart {
    constructor(iChartOption, chartInstance) {
        this.baseOption = cloneDeep(baseOption);
        this.chartInstance = chartInstance;
        // 组装 iChartOption, 补全默认值
        this.iChartOption = init(iChartOption);
        // 根据 iChartOption 组装 baseOption
        this.updateOption(this.iChartOption);
        // 配置图表事件
        event(chartInstance, iChartOption.event);
    }

    updateOption(iChartOption) {
        // 装载除series之外的其他配置
        RectCoordSys(this.baseOption, iChartOption, 'DoubleSidesAreaChart');
        // 重置grid
        handleGrid(this.baseOption, iChartOption, baseGrid);
        // 重置xAxis
        handleXaxis(this.baseOption, iChartOption, baseXaxis);
        // 重置yAxis
        handleYaxis(this.baseOption, iChartOption, baseYaxis);
        // 重置dataZoom
        handleDataZoom(this.baseOption);
        // x轴key值
        const xAxisKey = xkey(iChartOption);
        // x轴数据
        const xAxisData = xdata(iChartOption.data, xAxisKey);
        // 图例数据
        const legendData = ldata(iChartOption.data, xAxisKey);
        // 连线的数据
        const seriesData = ydata(iChartOption.data, legendData);
        // 给图例和x轴赋值
        handleData(this.baseOption, legendData, xAxisData);
        // tooltip 中数值部分添加单位
        handleTooltipValue(this.baseOption, iChartOption);
        // series赋值
        handleSeries(iChartOption, this.baseOption, seriesData, legendData);
        this.baseOption.title={}
    }

    getOption() {
        return this.baseOption;
    }

    setOption(option) {
        this.baseOption = option;
    }
}

export default DoubleSidesAreaChart;
