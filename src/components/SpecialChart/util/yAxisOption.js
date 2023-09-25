import { darkAxis, darkAxisLabel, lightAxis, lightAxisLabel } from '../util/color';

export const darkYaxis = {
  type: 'value',
  axisLine: {
    show: false,
  },
  axisTick: {
    show: false,
  },
  axisLabel: {
    color: darkAxisLabel,
  },
  nameTextStyle: {
    color: darkAxisLabel,
    fontSize: 12,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: [darkAxis],
      width: 2,
      type: 'solid',
    },
  },
};

export const lightYaxis = {
  type: 'value',
  axisLine: {
    show: false,
  },
  axisTick: {
    show: false,
  },
  axisLabel: {
    color: lightAxisLabel,
  },
  nameTextStyle: {
    color: lightAxisLabel,
    fontSize: 12,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: [lightAxis],
      width: 2,
      type: 'solid',
    },
  },
};

// y轴的名称采用title标题的形式来实现
export const yAxisNameDefault = {
  text: '',
  textStyle: {
    color: darkAxisLabel,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 12,
  },
  padding: [0, 0, 0, 0],
};
