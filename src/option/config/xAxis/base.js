import Theme from '../../../feature/theme';
import cloneDeep from '../../../util/cloneDeep';

const baseOption = {
  data: [],
  // 坐标轴类型
  type: 'category',
  // 坐标轴两边留白策略
  boundaryGap: true,
  // 坐标轴在grid区域中分隔线
  splitLine: {
    show: false,
  },
  // 坐标轴名称样式配置
  nameTextStyle: {
    color: undefined,
    fontSize: 12,
  },
  // 坐标轴线配置
  axisLine: {
    lineStyle: {
      width: 2,
      color: undefined,
    },
  },
  // 坐标轴刻度配置
  axisTick: {
    alignWithLabel: true,
    lineStyle: {
      width: 2,
      color: undefined,
    },
  },
  // 坐标轴刻度标签配置
  axisLabel: {
    color: undefined,
  },
};

function base(theme) {
  const option = cloneDeep(baseOption);
  if (theme.toLowerCase().indexOf('cloud') !== -1){
    option.axisLine.lineStyle.width = 1;
    option.axisTick.lineStyle.width = 1;
  }
  const colorBase = Theme.color.base
  option.nameTextStyle.color = colorBase.axislabel; 
  option.axisLine.lineStyle.color = colorBase.axis;
  option.axisTick.lineStyle.color = colorBase.axis;
  option.axisLabel.color = colorBase.axislabel;
  return option;
}

export default base;