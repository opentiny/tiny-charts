/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import Token from '../../../feature/token';
function icon(legend, iChartOption) {
  if (iChartOption.legend.icon === 'line') {
    legend.icon = 'rect';
    legend.itemHeight = Token.config.legendReactItemHeight;
    legend.itemWidth = Token.config.legendItemWidth;
  }
  if (iChartOption.legend.icon === 'dashed') {
    legend.icon = 'path://M9 8C11.2109 8 13 6.20898 13 4C13 1.79102 11.2109 0 9 0C6.78906 0 5 1.79102 5 4C5 6.20898 6.78906 8 9 8ZM1 3L3 3C3.55078 3 4 3.44775 4 4C4 4.55225 3.55078 5 3 5L1 5C0.449219 5 0 4.55225 0 4C0 3.44775 0.449219 3 1 3ZM17 3L15 3C14.4492 3 14 3.44775 14 4C14 4.55225 14.4492 5 15 5L17 5C17.5508 5 18 4.55225 18 4C18 3.44775 17.5508 3 17 3Z';
    legend.itemHeight = Token.config.legendDashedItemHeight;
    legend.itemWidth = Token.config.legendDashedItemWidth;
  }
}

export default icon;
