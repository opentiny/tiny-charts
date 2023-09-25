import base from './base';
import megre from '../../../util/megre';
import { isArray } from '../../../util/type';

function grid(iChartOpt) {
  let gridUnit = base();
  gridUnit.top = iChartOpt.padding[0];
  gridUnit.left = iChartOpt.padding[3];
  gridUnit.right = iChartOpt.padding[1];
  gridUnit.bottom = iChartOpt.padding[2];
  let gridResult = iChartOpt.grid || [gridUnit];
  if (!isArray(gridResult)) {
    gridResult = [gridResult];
  }
  gridResult.forEach(item => {
    megre(gridUnit, item);
  });
  return gridResult;
}

export default grid;
