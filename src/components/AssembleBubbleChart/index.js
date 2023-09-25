import cloneDeep from '../../util/cloneDeep';
import BaseOption from './BaseOption';
import { setLegend, setTooltip } from './handleOption';
import { getLegendData } from './handleData';
import { handleColor } from './handleColor';
import { handleRootData } from './handleRootData';
import { handleVirtualLengend } from './handleVirtualLengend';
import { handleSeriesData, changeSeriesData } from './handleSeriesData';
import { legendSelectChanged, legendDisappear, legendShow } from './legendSelectChanged';
import { event } from '../../util/event';
import init from '../../option/init';

function handleDistance(iChartOption, type) {
  // 获取设置的球之间的间距
  let distance = iChartOption.distance;
  if (!distance) {
    if (type === 'non-nested') {
      distance = 50;
    } else {
      distance = 5;
    }
  }
  return distance;
}

function configureLoadData(baseOptt, d3, iChartOption, seriesData, chartInstance) {
  if (d3) {
    // 设置主题
    const theme = iChartOption.theme;
    // 设置提示悬浮框样式
    baseOptt.tooltip = setTooltip(iChartOption, iChartOption.tipHtml);
    // 设置图例颜色
    const color = iChartOption.color;
    if (!color.length) {
      throw Error('颜色组颜色未定义');
    }
    // 设置数据类型分类
    const type = iChartOption.type;
    // series下面的数据处理部分
    seriesData = handleSeriesData(iChartOption, type, seriesData);
    const distance = handleDistance(iChartOption, type);
    // 图表图例
    baseOptt.legend = setLegend(iChartOption, iChartOption.legend);
    // 组装基础数据
    const legendData = getLegendData(seriesData);
    // 赋值数据
    baseOptt.legend.data = legendData;
    // 给BaseOption设置seriesData
    baseOptt.dataset[0].source = seriesData;
    const params = changeSeriesData(seriesData);
    const { depthFirst, depthMore, findColor, muchColor, colorData, colorLegend } = params;
    // 给seriesData数据添加颜色、处理显示文本等
    handleColor({
      depthFirst,
      findColor,
      muchColor,
      colorData,
      color,
      seriesData,
      type,
      colorLegend,
      depthMore,
      theme,
    });
    // 给BaseOption设置colorData
    baseOptt.color = colorLegend;
    // 给BaseOption设置findColor
    baseOptt.legend.data = findColor;
    // 给BaseOption设置虚拟图例
    baseOptt.series.unshift(...handleVirtualLengend(findColor));
    const length = findColor.length;
    handleRootData({ d3, seriesData, baseOpt: baseOptt, distance, length, type, chartInstance, iChartOption });
    return { baseOptt, seriesData, legendData };
  } else {
    throw new Error('您必须安装d3才可以使用聚合气泡图');
  }
}

class AssembleBubbleChart {
  constructor(iChartOption, plugins, chartInstance) {
    this.baseOption = {};
    this.baseOption = cloneDeep(BaseOption);
    this.iChartOption = init(iChartOption);
    this.updateOption(this.iChartOption, plugins, chartInstance, this.baseOption);
    // 配置图表事件
    event(chartInstance, this.iChartOption.event);
  }

  updateOption(iChartOption, plugins, chartInstance, baseOpt) {
    // 获取原始数据及相关参数
    let seriesData = [];
    const { type, theme } = legendSelectChanged(iChartOption);
    const color = iChartOption.color;
    chartInstance.on('legendselectchanged', function (params) {
      if (!params.selected[params.name]) {
        // 点击图例消失
        legendDisappear({ seriesData, params, theme, type, baseOpt, chartInstance });
      } else {
        const { depthFirst, depthMore, findColor, muchColor, colorData, colorLegend } = changeSeriesData(seriesData);
        seriesData = Array.from(new Set(seriesData));
        handleColor({
          depthFirst,
          findColor,
          muchColor,
          colorData,
          color,
          seriesData,
          type,
          colorLegend,
          depthMore,
          theme,
        });
        // 点击图例出现
        legendShow({ seriesData, type, theme, params, baseOpt, chartInstance });
      }
    });

    const d3 = plugins.d3;
    const { baseOptt } = configureLoadData(this.baseOption, d3, iChartOption, seriesData, chartInstance);
    this.baseOption = baseOptt;
    seriesData = configureLoadData(this.baseOption, d3, iChartOption, seriesData, chartInstance).seriesData;
  }

  getOption() {
    return this.baseOption;
  }

  setOption(option) {
    this.baseOption = option;
  }
}

export default AssembleBubbleChart;
