import { isArray } from '../../util/type';
import merge from '../../util/merge';

// 微型场景下，不显示不必要的图元
function miniRadar(iChartOption, baseOption) {
    iChartOption.radarMark = false;
    iChartOption.legend = merge(iChartOption.legend, {
      show: false
    });
    if (iChartOption.radar) {
      iChartOption.radar = Object.assign(iChartOption.radar, {
        axisName: {
          show: false
        }
      });
    } else {
      iChartOption.radar = {
        axisName: {
          show: false 
        },
        shape: 'circle'
      };
    }
    iChartOption.tooltip = Object.assign(iChartOption.tooltip || {}, {
      show: false
    });
}

export default miniRadar;