import merge from '../../util/merge';

// 微型场景下，不显示不必要的图元
function miniCircleProcess(iChartOption, baseOption) {
  if (iChartOption.mini) {
    baseOption.legend = Object.assign(baseOption.legend, {
      show: false
    });
    baseOption.title = merge(baseOption.title, {
      show: false
    });
    // baseOption.tooltip = Object.assign(baseOption.tooltip, {
    //   show: false
    // });
    baseOption.polar = Object.assign(baseOption.tooltip, {
      radius: ['70%', '100%']
    });
  }
}

export default miniCircleProcess;