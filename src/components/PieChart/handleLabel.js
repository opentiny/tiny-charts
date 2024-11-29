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
import merge from '../../util/merge';
import chartToken from './chartToken';

function handleLabel(hasLabel, seriesUnit) {
  if (hasLabel) {
    seriesUnit.label = merge({ color: chartToken.labelColor, fontSize: chartToken.labelFontSize }, seriesUnit.label);
  } else {
    seriesUnit.label = { show: false };
  }
}

function handleLabelLine(hasLabelLine, seriesUnit, label) {
  const lineColor = label?.lineColor;
  const lineLength = label?.labelLineLength ?? chartToken.labelLineLength;
  if (hasLabelLine) {
    seriesUnit.labelLine = merge(
      {
        show: true,
        lineStyle: {
          color: lineColor ? lineColor : chartToken.labelLineColor,
        },
        length: lineLength,
        length2: lineLength,
      },
      seriesUnit.labelLine,
    );
  } else {
    seriesUnit.labelLine = {
      show: false,
      length: lineLength,
      length2: lineLength,
    };
  }
}

function hasLabelFormatterFun(labelFormatterType, seriesUnit, sum) {
  switch (labelFormatterType) {
    case 'percent':
      seriesUnit.label.formatter = params => {
        if (params.value === 0) {
          return '0(0 %)';
        } else {
          const percent = ((params.value * 100) / sum).toFixed(2);
          return `${percent} %`;
        }
      };
      break;
    case 'value':
      seriesUnit.label.formatter = params => {
        return `${params.value}`;
      };
      break;
    default:
      break;
  }
}

function handleLabelFormatter(hasLabel, hasLabelFormatter, seriesUnit, labelFormatterType, sum) {
  if (hasLabel && hasLabelFormatter) {
    seriesUnit.label.formatter = hasLabelFormatter;
  } else {
    hasLabelFormatterFun(labelFormatterType, seriesUnit, sum);
  }
}

/**
 * 配置圆盘图的label
 */
function setLabel(seriesUnit, label, data) {
  const hasLabel = !(label && label.show === false);
  const hasLabelLine = !(label && label.line === false);
  const hasLabelFormatter = label && label.labelHtml;
  const labelFormatterType = (label && label.type) || '';
  let sum = data.reduce((x, y) => ({ value: x.value + y.value }), { value: 0 });
  sum = sum.value;
  handleLabel(hasLabel, seriesUnit, label);
  handleLabelLine(hasLabelLine, seriesUnit, label);
  handleLabelFormatter(hasLabel, hasLabelFormatter, seriesUnit, labelFormatterType, sum);
  // 合并label其他属性
  merge(seriesUnit.label, label);
}

export default setLabel;
