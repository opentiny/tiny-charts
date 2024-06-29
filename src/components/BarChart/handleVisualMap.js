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
import min from '../../util/sort/min';
import max from '../../util/sort/max';
import { getColor } from '../../util/color';
import Theme from '../../feature/token';

export function setVisualMap(legendData, seriesData, markLine, colors) {
  const visualMap = [];
  if (markLine) {
    const topValue = markLine.top;
    const bottomValue = markLine.bottom;
    legendData.forEach((legendName, index) => {
      const data = seriesData[legendName];
      const minData = min(data);
      const maxData = max(data);
      const bottom = bottomValue || minData - 1;
      const top = topValue || maxData + 1;
      // 根据数据大小映射颜色
      visualMap.push({
        show: false,
        type: 'piecewise',
        dimension: 1,
        seriesIndex: index,
        pieces: [
          {
            gt: bottom,
            lt: top,
            color: getColor(colors, index),
          },
        ],
        outOfRange: {
          color:Theme.config.colorState.colorError,
        },
      });
    });
  }
  return visualMap;
}
