import Theme from '../../feature/theme';
import merge from '../../util/megre';

/**
 * 配置山峰图高亮状态
 * @param {*} baseOpt 
 * @param {*} iChartOpt 
 */
export const handleEmphasis = (baseOpt, iChartOpt) => {
  const { emphasis } = iChartOpt;
  const defaultEmphasis = {
    disabled: true,
    label: {
      color: Theme.color.state.prompt,
    },
    itemStyle: {
      borderColor:  Theme.color.base.bg,
      borderWidth: 2,
    },
  };
  merge(defaultEmphasis, emphasis);
  baseOpt.series[0] = {
    ...baseOpt.series[0],
    emphasis: defaultEmphasis,
  };
};