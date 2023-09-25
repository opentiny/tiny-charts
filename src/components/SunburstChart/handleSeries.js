import Theme from '../../feature/theme';
import cloneDeep from '../../util/cloneDeep';

export const seriesInit = {
  center: ['50%', '50%'],
  radius: ['12%', '70%'],
  type: 'sunburst',
  sort: undefined,
  emphasis: {
    focus: 'descendant',
  },
  itemStyle: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '',
  },
  data: [],
  label: {
    rotate: 0,
    color: '',
  },
  levels: [],
};

/**
 * 组装echarts所需要的series
 * @param {传入数据} iChartOption
 * @returns
 */
export function setSeries(iChartOption) {
  const { data } = iChartOption;
  const series = cloneDeep(seriesInit);
  series.data = data;
  const colorBase = Theme.color.base;
  series.itemStyle.borderColor = colorBase.bg;
  series.label.color = colorBase.font;
  return series;
}
