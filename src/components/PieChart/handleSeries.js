import Theme from '../../feature/theme';
import cloneDeep from '../../util/cloneDeep';

export const seriesInit = {
  type: 'pie',
  roundCap: true,
  radius: ['0%', '50%'],
  center: ['50%', '50%'],
  avoidLabelOverlap: true,
  itemStyle: {
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  label: {},
  labelLine: {},
  data: [],
};

function handleHasLabel(hasLabel, seriesUnit, theme, label) {
  if (hasLabel) {
    seriesUnit.label = { color: theme === 'dark' ? '#eeeeee' : '#191919' };
    Object.assign(seriesUnit.label, label);
  } else {
    seriesUnit.label = { show: false };
  }
}

function handleHasLabelLine(hasLabelLine, seriesUnit, label, theme) {
  if (hasLabelLine) {
    let _lineColor;
    if (label) {
      const { lineColor } = label;
      _lineColor = lineColor;
    }
    seriesUnit.labelLine = {
      show: true,
      lineStyle: {
        color: _lineColor ? _lineColor : theme === 'dark' ? '#eeeeee' : '#191919',
      },
      smooth: 0.3,
      length: label !== undefined ? (label.distance !== undefined ? label.distance : 25) : 25,
      length2: label !== undefined ? (label.distance !== undefined ? label.distance : 25) : 25,
    };
  } else {
    seriesUnit.labelLine = {
      show: false,
      length: label !== undefined ? (label.distance !== undefined ? label.distance : 25) : 25,
      length2: label !== undefined ? (label.distance !== undefined ? label.distance : 25) : 25,
    };
  }
}

function hasLabelFormatterFun(labelFormatterType, seriesUnit, sum) {
  switch (labelFormatterType) {
    case 'percent':
      seriesUnit.label.formatter = params => {
        if (params.value === 0) {
          return '0（0 %）';
        } else {
          return `${params.value}（${Math.round(((params.value * 100) / sum) * 100) / 100} %）`;
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

function handleHasLabelFormatter(hasLabel, hasLabelFormatter, seriesUnit, labelFormatterType, sum) {
  if (hasLabel && hasLabelFormatter) {
    seriesUnit.label.formatter = hasLabelFormatter;
  } else {
    hasLabelFormatterFun(labelFormatterType, seriesUnit, sum);
  }
}

/**
 * 配置圆盘图的label
 */
function setLabel(theme, seriesUnit, label, data) {
  const hasLabel = !(label && label.show === false);
  const hasLabelLine = !(label && label.line === false);
  const hasLabelFormatter = label && label.labelHtml;
  const labelFormatterType = (label && label.type) || '';
  let sum = data.reduce((x, y) => ({ value: x.value + y.value }), { value: 0 });
  sum = sum.value;
  handleHasLabel(hasLabel, seriesUnit, theme, label);
  handleHasLabelLine(hasLabelLine, seriesUnit, label, theme);
  handleHasLabelFormatter(hasLabel, hasLabelFormatter, seriesUnit, labelFormatterType, sum);
}

/**
 * 根据参数计算出圆盘图的半径
 */
function setPieRadius(pieType, radius) {
  if (radius) {
    return radius;
  } else {
    let radius = [];
    switch (pieType) {
      case 'pie':
        radius = ['0%', '50%'];
        break;
      case 'circle':
        radius = ['44%', '50%'];
        break;
      case 'multi-circle':
        // 待修改
        radius = ['44%', '50%'];
        break;
      default:
        radius = ['0%', '50%'];
        break;
    }
    return radius;
  }
}

/**
 * 数据为零时添加背景
 */
function handleEmptyData(data, series, theme, center, radius) {
  const total = data.reduce((pre, cur) => {
    pre = pre + cur.value;
    return pre;
  }, 0);
  if (total === 0) {
    series.forEach((item) => {
      item.stillShowZeroSum = false;
      item.itemStyle.borderWidth = 0;
    })
    series.push(
      {
        type: 'pie',
        radius,
        center,
        label: {
          show: false,
        },
        emptyCircleStyle: {
          color:Theme.color.base.axis,
        },
        silent: true,
        animation: false,
      }
    )
  }
}

/**
 * 组装echarts所需要的series
 * @param {主题} theme
 * @param {数据} data
 * @returns
 */
function handleSeries(pieType, theme, iChartOption, position) {
  const { data, label, itemStyle, silent, minAngle, emphasis, stillShowZeroSum } = iChartOption;
  position = position || {};
  // 更改扇面边框样式
  if (itemStyle && itemStyle.borderColor) {
    seriesInit.itemStyle.borderColor = itemStyle.borderColor;
  } else {
    seriesInit.itemStyle.borderColor = Theme.color.base.main
  }
  if (itemStyle && itemStyle.borderRadius) {
    seriesInit.itemStyle.borderRadius = itemStyle.borderRadius;
  }
  if (itemStyle && itemStyle.borderWidth) {
    seriesInit.itemStyle.borderWidth = itemStyle.borderWidth;
  }

  // 组装数据
  const series = [];
  const seriesUnit = cloneDeep(seriesInit);
  const center = position.center || ['50%', '50%'];
  const radius = setPieRadius(pieType, position.radius);
  seriesUnit.data = data;
  // 圆盘图label
  setLabel(theme, seriesUnit, label, data);
  // 圆盘图位置
  seriesUnit.center = center;
  // 圆盘图半径
  seriesUnit.radius = radius;
  // 圆盘图最小角度      
  if (minAngle) {
    seriesUnit.minAngle = minAngle;
  }
  series.push(seriesUnit);
  // 数据和为0时不显示扇区
  if (stillShowZeroSum === false) {
    handleEmptyData(data, series, theme, center, radius);
  }
  // 是否关闭hover态的效果，默认为false
  series[0].silent = silent || false;
  // hover虚化效果
  const baseEmphasis = {
    focus: 'none',
  };
  if (emphasis) {
    series[0].emphasis = Object.assign(baseEmphasis, emphasis);
  }
  return series;
}

export default handleSeries