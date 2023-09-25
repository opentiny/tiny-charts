import { event } from '../../../util/event';
import {
  handleTooltip,
  handleYaxis,
  handleData,
  handleGrid,
  handleXaxis,
  handleDataZoom,
  handleLegend,
} from './handleOption';
import { handleSeries } from './handleSeries';
import RectCoordSys from '../../../option/RectangularCoordinateSystem';

class ProcessBarChart {
  constructor(iChartOption, _, chartInstance) {
    this.baseOption = {};
    this.updateOption(iChartOption, chartInstance);
  }

  updateOption(iChartOption, chartInstance) {
    RectCoordSys(this.baseOption, iChartOption, 'ProcessBarChart');
    const color = iChartOption.color;
    const data = iChartOption.data;
    if (!data) return;
    // 是否双向
    const doubleSide = iChartOption.type && iChartOption.type === 'double-sides';

    const dataSet = handleData(iChartOption, doubleSide);

    handleGrid(this.baseOption, iChartOption, chartInstance, doubleSide);

    handleYaxis(this.baseOption, iChartOption, dataSet, doubleSide);

    handleXaxis(this.baseOption, doubleSide);

    handleDataZoom(this.baseOption);

    handleSeries(this.baseOption, iChartOption, color, dataSet, data, doubleSide);

    handleTooltip(this.baseOption, iChartOption, data, doubleSide);

    handleLegend(this.baseOption, iChartOption, dataSet, doubleSide);
    
    event(chartInstance, iChartOption.event);
  }

  getOption() {
    return this.baseOption;
  }

  setOption(option) {
    this.baseOption = option;
  }
}

export default ProcessBarChart;
