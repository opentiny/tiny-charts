import { darkFontColor, lightFontColor } from '../util/color';

export const lightTooltip = {
  trigger: 'axis',
  axisPointer: {
    type: 'line',
    lineStyle: {
      width: 1,
      type: 'soild',
      color: 'rgba(210,210,210,1)',
    },
    shadowStyle: {
      color: 'rgba(210,210,210,1)',
    },
  },
  borderWidth: 0,
  backgroundColor: '#ffffff',
  textStyle: {
    color: lightFontColor,
    fontSize: 14,
  },
  formatter: undefined,
};

export const darkTooltip = {
  trigger: 'axis',
  axisPointer: {
    type: 'line',
    lineStyle: {
      width: 1,
      type: 'soild',
      color: 'rgba(238,238,238,0.3)',
    },
    shadowStyle: {
      color: 'rgba(210,210,210,0.2)',
    },
  },
  padding: [14, 16],
  borderWidth: 0,
  backgroundColor: '#393939',
  textStyle: {
    color: darkFontColor,
    fontSize: 14,
  },
  formatter: undefined,
};
