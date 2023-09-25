import init from '../../option/init';
import { event } from '../../util/event';
import { BaseOption } from './BaseOption';
import cloneDeep from '../../util/cloneDeep';
import { handleData, updateData } from './handleData';
import { handleCategories, handleForce, handleArrow, handlePosition, handleLineStyle } from './handleOption';
import { mixTree } from './mixTree';

class GraphTreeChart {
  constructor(iChartOption, _, chartInstance) {
    this.rootData = {};
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, _, chartInstance);
  }

  updateOption(iChartOption, _, chartInstance) {
    // 配置主题
    const theme = iChartOption.theme || 'light';
    // 处理节点类目样式
    handleCategories(iChartOption, this.baseOption, theme);
    // 处理基础数据
    const { rootData } = handleData(iChartOption.data, this.baseOption);
    this.rootData = { ...rootData };
    // 处理force配置(节点间距、节点密集度、节点连线长度、树趋近率)
    handleForce(iChartOption, this.baseOption);
    // 配置节点连线箭头
    handleArrow(iChartOption, this.baseOption, theme);
    // 处理图表位置
    handlePosition(iChartOption, this.baseOption);
    // 配置节点连线样式
    handleLineStyle(iChartOption, this.baseOption, theme);
    // 配置图表事件
    event(chartInstance, iChartOption.event);
    // GraphTreeChart聚合树图, 需要走一遍echarts Tree图获取节点对应坐标;
    mixTree(this, chartInstance, this.baseOption);
  }

  updateNodesData(positionArr, idArr) {
    // 将获取到的坐标和id匹配起来传给nodes，更新nodes数据
    updateData(this.rootData, this.baseOption, positionArr, idArr);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() {}
}

export default GraphTreeChart;
