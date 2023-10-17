import base from './base';
import merge from '../../../util/merge';

function angleAxis(iChartOption, chartName) {
  let angleAxisOpt = undefined;
  switch (chartName) {
    case 'JadeJueChart':
    case 'PolarBarChart':
      angleAxisOpt = base(iChartOption.theme, chartName);
      merge(angleAxisOpt, iChartOption.angleAxis)
      break;
    case 'CircleProcessChart':
      angleAxisOpt = {
        max: 100,
        show: false,
      };
      break;
    default:
      break;
  }
  return angleAxisOpt;
}

export default angleAxis;
