import base from './base';
import megre from '../../../util/megre';

function radiusAxis(iChartOption, chartName) {
  let radiusAxisOpt = undefined;
  switch (chartName) {
    case 'JadeJueChart':
    case 'PolarBarChart':
      radiusAxisOpt = base(iChartOption.theme, chartName);
      megre(radiusAxisOpt, iChartOption.radiusAxis)
      break;
    case 'CircleProcessChart':
      radiusAxisOpt = {
        type: "category",
        show: false,
      }
      break;
    default:
      break;
  }
  return radiusAxisOpt;
}

export default radiusAxis;
