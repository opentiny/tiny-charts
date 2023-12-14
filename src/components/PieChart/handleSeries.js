import merge from '../../util/merge';
import setLabel from './handleLabel'
import chartToken from './chartToken';
import cloneDeep from '../../util/cloneDeep';

export const seriesInit = () => {
  return {
    type: 'pie',
    roundCap: true,
    radius: ['0%', '50%'],
    center: ['50%', '50%'],
    avoidLabelOverlap: true,
    itemStyle: {
      borderWidth: chartToken.borderWidth,
      borderColor: chartToken.borderColor,
      borderRadius: chartToken.borderRadius,
    },
    selectedMode: false,
    roseType: false,
    label: {},
    labelLine: {},
    data: [],
  };
};

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
function handleEmptyData(data, series, center, radius) {
  const total = data.reduce((pre, cur) => {
    pre = pre + cur.value;
    return pre;
  }, 0);

  if (total === 0) {
    series.forEach(item => {
      item.stillShowZeroSum = false;
      item.itemStyle.borderWidth = chartToken.borderWidthZero;
    });
    series.push({
      type: 'pie',
      radius,
      center,
      label: {
        show: false,
      },
      emptyCircleStyle: {
        color: chartToken.emptyColor,
      },
      silent: true,
      animation: false,
    });
  }
}

// 合并默认值seriesInit到series
function mergeDefaultSeries(seriesUnit) {
  for (const key in seriesInit()) {
    if (Object.hasOwnProperty.call(seriesInit(), key)) {
      if (key === 'itemStyle') {
        const series = cloneDeep(seriesInit());
        seriesUnit[key] = merge(series.itemStyle, seriesUnit.itemStyle);
      }
      if (seriesUnit[key] === undefined) {
        seriesUnit[key] = seriesInit()[key];
      }
    }
  }
}

/**
 * 组装echarts所需要的series
 * @param {数据} data
 * @returns
 */

const config = [
  'label',
  'labelLine',
  'itemStyle',
  'radius',
  'center',
  'silent',
  'minAngle',
  'emphasis',
  'stillShowZeroSum',
  'selectedMode',
  'roseType',
];

function handleSeries(pieType, iChartOption, position) {
  const { data, stillShowZeroSum } = iChartOption;
  position = position || {};
  iChartOption.center = position?.center;
  iChartOption.radius = position?.radius;

  // 组装series数据
  let series = [];
  let selfSeries = iChartOption.series;
  if (selfSeries === undefined) {
    selfSeries = [{}];
  }
  selfSeries.forEach(seriesItem => {
    const seriesUnit = seriesItem;
    const temp = cloneDeep(iChartOption);
    // 处理属性的优先级
    config.forEach(name => {
      const existValue = merge(temp[name], seriesUnit[name]);
      if (existValue !== undefined) {
        seriesUnit[name] = existValue;
      }
    });
    seriesUnit.data = seriesUnit.data || iChartOption.data;
    seriesUnit.radius = setPieRadius(pieType, seriesUnit.radius);
    setLabel(seriesUnit, seriesUnit.label, seriesUnit.data);
    // 默认样式合并
    mergeDefaultSeries(seriesUnit);
  });
  // 数据和为0时不显示扇区 数据和为0时series属性都是一级
  if (stillShowZeroSum === false) {
    handleEmptyData(data, selfSeries, selfSeries[0].center, selfSeries[0].radius);
  }
  series = selfSeries;
  return series;
}

export default handleSeries;
