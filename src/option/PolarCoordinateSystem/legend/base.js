import cloneDeep from '../../../util/cloneDeep';
import Theme from '../../../feature/theme'
const baseOption = {
  data: [],
  icon: 'circle',
  left: 'center',
  bottom: 12,
  inactiveColor: undefined,
  inactiveBorderColor: undefined,
  inactiveBorderWidth: 0,
  borderWidth: 0,
  formatter: undefined,
  textStyle: {
    fontSize: 12,
    color: undefined,
    align: 'left',
    verticalAlign: 'top',
    padding: [4, 0, 0, 0],
    rich: {
      a: {
        fontSize: 12,
        color: undefined,
        align: 'left',
        verticalAlign: 'top',
        padding: [4, 0, 0, 0],
      },
      b: {
        fontSize: 12,
        color: undefined,
        align: 'left',
        verticalAlign: 'top',
        padding: [4, 0, 0, 0],
      },
    },
    overflow: 'none',
    width: undefined,
  },
  width: undefined,
  pageTextStyle: {
    color: undefined,
  },
  pageIconColor: undefined,
  pageIconInactiveColor: undefined,
  selectedMode: true,
  align: 'left',
  itemGap: 28,
  itemWidth: 25,
  itemHeight: 12,
  itemStyle: {
    borderWidth: 0,
  },
};

function base(theme) {
  const option = cloneDeep(baseOption);
  if (theme.toLowerCase().indexOf('cloud') !== -1) {
    option.itemHeight = 6;
  }
  const colorBase = Theme.color.base
  option.inactiveColor = colorBase.subfont;
  option.inactiveBorderColor = colorBase.main;
  option.textStyle.color = colorBase.axislabel;
  option.textStyle.rich.a.color = colorBase.axislabel;
  option.textStyle.rich.b.color = colorBase.axislabel;
  option.pageTextStyle.color = colorBase.font;
  option.pageIconInactiveColor = colorBase.axis;
  option.pageIconColor = colorBase.axislabel;
  return option;
}

export default base;
