import { isArray } from '../../util/type';
import merge from '../../util/merge';

// 微型场景下，不显示不必要的图元
function miniPie(iChartOption, baseOption) {
    const {mini, padding, legend, title, tooltip, yAxis} = iChartOption;
    baseOption.series.forEach(item => {
      Object.assign(item, {
        center: ['50%', '50%'],
        label: {
          show: !mini,
        },
        labelLine: {
          show: !mini,
        },
      });
    });

    baseOption.legend = Object.assign(baseOption.legend, {
      show: mini ? false : (legend?.show === undefined ? true : legend?.show)
    });
    baseOption.title = merge(baseOption.title, {
      show: mini ? false : (title?.show === undefined ? true : title?.show)
    });
    baseOption.tooltip = Object.assign(baseOption.tooltip, {
      show: mini ? false : (tooltip?.show === undefined ? true : tooltip?.show)
    });
}

export default miniPie;