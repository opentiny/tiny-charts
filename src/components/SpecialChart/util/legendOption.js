import { darkColor, darkAxis, darkAxisLabel, lightColor, lightAxis, lightAxisLabel } from '../util/color';

export const lightLegend = {
  data: [],
  icon: 'circle',
  left: 'center',
  bottom: 12,
  itemGap: 28,
  inactiveColor: lightAxis,
  inactiveBorderColor: lightColor,
  inactiveBorderWidth: 0,
  formatter: undefined,
  textStyle: {
    fontSize: 12,
    color: lightAxisLabel,
    align: 'left',
    verticalAlign: 'top',
    padding: [4, 0, 0, 0],
    rich: {
      a: {
        fontSize: 12,
        color: lightAxisLabel,
        align: 'left',
        verticalAlign: 'top',
        padding: [4, 0, 0, 0],
      },
    },
  },
};

export const darkLegend = {
  data: [],
  icon: 'circle',
  left: 'center',
  bottom: 12,
  itemGap: 28,
  inactiveColor: darkAxis,
  inactiveBorderColor: darkColor,
  inactiveBorderWidth: 0,
  formatter: undefined,
  textStyle: {
    fontSize: 12,
    color: darkAxisLabel,
    align: 'left',
    verticalAlign: 'top',
    padding: [4, 0, 0, 0],
    rich: {
      a: {
        fontSize: 12,
        color: darkAxisLabel,
        align: 'left',
        verticalAlign: 'top',
        padding: [4, 0, 0, 0],
      },
    },
  },
};
