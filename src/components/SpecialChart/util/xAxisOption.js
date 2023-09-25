import { darkAxis, darkAxisLabel, lightAxis, lightAxisLabel } from '../util/color';

export const darkXaxis = {
  type: 'category',
  boundaryGap: true,
  data: [],
  splitLine: {
    show: false,
  },
  nameTextStyle: {
    color: darkAxisLabel,
    fontSize: 12,
  },
  axisLine: {
    lineStyle: {
      width: 2,
      color: darkAxis,
    },
  },
  axisTick: {
    alignWithLabel: true,
    lineStyle: {
      width: 2,
      color: darkAxis,
    },
  },
  axisLabel: {
    color: darkAxisLabel,
  },
};

export const lightXaxis = {
  type: 'category',
  boundaryGap: true,
  data: [],
  splitLine: {
    show: false,
  },
  nameTextStyle: {
    color: lightAxisLabel,
    fontSize: 12,
  },
  axisLine: {
    lineStyle: {
      width: 2,
      color: lightAxis,
    },
  },
  axisTick: {
    alignWithLabel: true,
    lineStyle: {
      width: 2,
      color: lightAxis,
    },
  },
  axisLabel: {
    color: lightAxisLabel,
  },
};
