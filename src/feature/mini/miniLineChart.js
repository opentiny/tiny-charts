import { isArray } from '../../util/type';
import merge from '../../util/merge';

// 微型场景下，不显示不必要的图元
function miniLine(iChartOption, baseOption) {
  // if (iChartOption.mini) {
    const {mini, padding, legend, title, tooltip, yAxis} = iChartOption;
    baseOption.grid.forEach(item => {
      Object.assign(item, {
        top: mini ? 1 : padding?.[0] || 0,
        right: mini ? 0 : padding?.[1] || 0,
        bottom: mini ? 1 : padding?.[2] || 0,
        left: mini ? 0 : padding?.[3] || 0,
        containLabel: !mini,
      });
    });
    baseOption.legend = Object.assign(baseOption.legend, {
      show: mini ? false : (legend?.show || true)
    });
    baseOption.title = merge(baseOption.title, {
      show: mini ? false : (title?.show || true)
    });
    // baseOption.tooltip = Object.assign(baseOption.tooltip, {
    //   show: mini ? false : (tooltip?.show || true)
    // });
    if (!isArray(baseOption.xAxis)) {
      baseOption.xAxis = [baseOption.xAxis];
    }
    if (!isArray(baseOption.yAxis)) {
      baseOption.yAxis = [baseOption.yAxis];
    }
    baseOption.xAxis.forEach(item => {
      Object.assign(item, {
        show: !mini,
        boundaryGap: false,
      });
    });
    baseOption.yAxis.forEach(item => {
      Object.assign(item, {
        show: !mini,
        max: mini ? 'dataMax' : (yAxis?.max ? yAxis?.max : () => null),
        min: mini ? 'dataMin' : (yAxis?.min ? yAxis?.min : () => null),
      });
    });

    baseOption.dataZoom.forEach(item => {
      Object.assign(item, {
        show: mini ? false : iChartOption.dataZoom.show
      });
    });
  // }
}

export default miniLine;