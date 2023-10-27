import merge from '../../util/merge';
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
  selectMode: false,
  roseType: false,
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
          return '0(0 %)';
        } else {
          return `${params.value}(${Math.round(((params.value * 100) / sum) * 100) / 100} %)`;
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
  debugger
  const hasLabel = !(label && label.show === false);
  const hasLabelLine = !(label && label.line === false);
  const hasLabelFormatter = label && label.labelHtml;
  const labelFormatterType = (label && label.type) || '';
  let sum = data.reduce((x, y) => ({ value: x.value + y.value }), { value: 0 });
  sum = sum.value;
  handleHasLabel(hasLabel, seriesUnit, theme, label);
  handleHasLabelLine(hasLabelLine, seriesUnit, label, theme);
  handleHasLabelFormatter(hasLabel, hasLabelFormatter, seriesUnit, labelFormatterType, sum);
  // 合并label其他属性
  merge(seriesUnit.label, label)
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
          color: Theme.color.base.axis,
        },
        silent: true,
        animation: false,
      }
    )
  }
}

// 合并默认值到series
function mergeDefaultSeries(seriesUnit) {
  for (const key in seriesInit) {
    if (Object.hasOwnProperty.call(seriesInit, key)) {
      if (key === 'itemStyle') {
        const series = cloneDeep(seriesInit);
        seriesUnit[key] = merge(series.itemStyle, seriesUnit.itemStyle);
      }
      if (seriesUnit[key] === undefined) {
        seriesUnit[key] = seriesInit[key];
      }
    }
  }
}

/**
 * 组装echarts所需要的series
 * @param {主题} theme
 * @param {数据} data
 * @returns
 */

function handleSeries(pieType, theme, iChartOption, position) {
  const { data, label, stillShowZeroSum } = iChartOption;
  position = position || {};
  iChartOption.center = position?.center;
  iChartOption.radius = position?.radius;
  // 组装数据
  let series = [];
  let selfSeries = iChartOption.series;
  if (selfSeries === undefined) {
    selfSeries = [{}];
  }
  selfSeries.forEach(seriesItem => {
    debugger
    const seriesUnit = seriesItem;
    const config = ['data', 'label', 'labelLine', 'itemStyle', 'radius', 'center', 'silent',
      'minAngle', 'emphasis', 'stillShowZeroSum', 'selectedMode', 'roseType']
    // 处理属性的优先级
    config.forEach((name) => {
      if (seriesUnit[name] === undefined) {
        seriesUnit[name] = iChartOption[name];
      }
    });
    seriesUnit['radius'] = setPieRadius(pieType, seriesUnit.radius);
    setLabel(theme, seriesUnit, label, data);
    // 默认样式合并
    mergeDefaultSeries(seriesUnit);

  })
  // 数据和为0时不显示扇区 数据和为0时series属性都是一级
  if (stillShowZeroSum === false) {
    handleEmptyData(data, selfSeries, theme, selfSeries[0].center, selfSeries[0].radius);
  }
  series = selfSeries;
  return series;
}

export default handleSeries