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
import { CHARTTYPE } from "./BaseOption";
import { getColor, codeToRGB } from "../../util/color";
import chartToken from "./chartToken";

export function handleSeriesData(iChartOption, baseOpt, chartType) {
  const sourceData = [
    {
      depth: 0,
      id: 'option',
      value: 1255,
      type: undefined,
      label: undefined,
    }
  ];
  const legendData = [];

  const loopData = (data, depth = 1, parentInfo = { id: 'option' }) => {
    data.forEach((item, index) => {
      item.depth = depth;
      item.id = `${parentInfo.id}.${index}`;
      item.textColor = chartToken.labelColor;
      if (depth === 1) {
        let hasRecordIndex = legendData.findIndex(v => v === item.type);
        item.color = getColor(iChartOption.color, hasRecordIndex !== -1 ? hasRecordIndex : legendData.length);
        item.borderColor = item.color;
      } else {
        item.type = parentInfo.type;
        item.color = parentInfo.color;
        item.borderColor = parentInfo.borderColor;
      }
      sourceData.push(item);
      if (!legendData.includes(item.type)) {
        legendData.push(item.type);
      }
      if (chartType === CHARTTYPE.NESTED && item.children && item.children.length) {
        if (item.depth === 1) {
          item.color = codeToRGB(item.color, .2);
        }
        loopData(item.children, depth + 1, item);
      }
    });
  };

  loopData(iChartOption.data);

  baseOpt.dataset[0].source = sourceData;

  baseOpt.legend.data = legendData;

  [...legendData].reverse().forEach((item) => {
    baseOpt.series.unshift({
      name: item,
      type: 'pie',
      data: [],
      radius: ['0%', '0%'],
      colorBy: 'data',
    });
  });
}
