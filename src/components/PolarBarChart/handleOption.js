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
import defendXSS from '../../util/defendXSS';
// 获取bar的series数据
export function getSeriesData(data, type) {
  const seriesData = [];
  if (type === 'normal') {
    data.forEach((item, i) => {
      seriesData[i] = [];
      for (let j = 0; j < data.length; j++) {
        if (i == j) {
          seriesData[i][j] = item.value;
        } else {
          seriesData[i][j] = 0;
        }
      }
    });
  } else {
    data.forEach((item) => {
      seriesData.push(item.value);
    });
  }

  return seriesData;
}

// pie文本数据旋转
function angleText(i, num) {
  // 每个元素的角度
  const everyAngle = 360 / num;
  // 文字现在所在的角度
  const currentAngle = i * everyAngle + everyAngle / 2;
  if (currentAngle >= 90 && currentAngle <= 270) {
    return 180 - currentAngle;
  } else {
    return 360 - currentAngle;
  }
}

// 获取pie旋转文本数据
export function getLabelData(data) {
  const labelData = [];
  const length = data.length;
  data.forEach((item, i) => {
    const obj = {
      name: `${item.name} `,
      value: 1,
      label: {
        rotate: angleText(i, length),
      },
    };
    labelData.push(obj);
  });
  return labelData;
}

function tooltipFormatter(params) {
  const seriesName = params.name;
  const color = params.color;
  const value = params.value;
  const htmlString = `<div>
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:8px;border-radius:5px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(color)};background-color:${defendXSS(color)};"></span>
                            <span style="margin-right:16px">${defendXSS(seriesName)}</span>
                            <span>${defendXSS(value)}</span>
                       </div>`;
  return htmlString;
}

/**
 * 配置默认的鼠标悬浮提示框
 */
export function setTooltip(baseOpt) {
  if (!baseOpt.tooltip.formatter) {
    baseOpt.tooltip.formatter = tooltipFormatter;
  }
}
