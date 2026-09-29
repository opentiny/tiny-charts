import { isArray } from '../../util/type';
import merge from '../../util/merge';

// 微型场景下，不显示不必要的图元
function miniProcess(iChartOption, baseOption) {
  // if (iChartOption.mini) {
    const {mini, padding, legend, title, label, tooltip, yAxis} = iChartOption;
    baseOption.grid.forEach(item => {
      Object.assign(item, {
        top: mini ? 1 : padding?.[0] || 0,
        right: mini ? 0 : padding?.[1] || 0,
        bottom: mini ? 1 : padding?.[2] || 0,
        left: mini ? 0 : padding?.[3] || 0,
        containLabel: false,
      });
    });

    baseOption.series.forEach(item => {
      item.oldLabel = !item.oldLabel ? item.label : item.oldLabel;
      if (mini) {
        item.label = { show: false  }
      } else {
        item.label = item.oldLabel || item.label;
      }
    });
    baseOption.legend = Object.assign(baseOption.legend, {
      show: false
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
          show: false,
          boundaryGap: !mini,
        });
      });
      baseOption.yAxis.forEach(item => {
        if (mini) {
          merge(item,{
            show: false,
            max: 'dataMax',
            min: 'dataMin',
          })
        } else {
          item.show = false;
          delete item.max;
          delete item.min;
        }
      });
    
    
  // }
}

export default miniProcess;