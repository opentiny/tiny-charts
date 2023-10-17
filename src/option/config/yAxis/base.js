import cloneDeep from '../../../util/cloneDeep';
import Theme from '../../../feature/theme'
const baseOption = {
  type: 'value',
  axisLine: {
    show: false,
  },
  axisTick: {
    show: false,
  },
  axisLabel: {
    color: undefined,
  },
  nameTextStyle: {
    color: undefined,
    fontSize: 12,
  },
  splitLine: {
    show: true,
    lineStyle: {
      width: 2,
      cap: 'butt',
      type: 'solid',
      color: [undefined],
    },
  },
  minInterval: undefined,
  maxInterval: undefined,
};

function base(theme) {
  const option = cloneDeep(baseOption);
  if (theme.toLowerCase().indexOf('cloud') !== -1) {
    option.splitLine.lineStyle.width = 1;
    option.splitLine.lineStyle.type = [4, 4];
  }
  const colorBase = Theme.color.base
  option.axisLabel.color = colorBase.axislabel;
  option.nameTextStyle.color = colorBase.axislabel;
  option.splitLine.lineStyle.color = [colorBase.axis];
  return option;
}

export default base;
