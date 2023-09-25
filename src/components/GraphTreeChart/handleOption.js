import { virtualNodeSymbol, darkArrow, lightArrow, lightColor, darkColor } from './BaseOption';

/**
 * 配置节点的样式，与节点的category属性有关
 * @param {*} iChartOption
 * @param {*} baseOption
 * @param {*} theme
 */
const handleCategories = (iChartOption, baseOption, theme) => {
  const baseCategories = [
    // 根节点样式
    {
      symbol: 'circle',
      symbolSize: 12,
      itemStyle: {
        color: '#dfba3f',
      },
    },
    // 子节点样式
    {
      symbol: 'circle',
      symbolSize: 12,
      itemStyle: {
        color: theme === 'light' ? lightColor : darkColor,
      },
    },
    // 虚拟节点样式(方形小黄块)
    {
      symbol: virtualNodeSymbol,
      symbolSize: 20,
      // symbol: 'path://M10 10,L20 10,L20 20, L10 20 Z',
      itemStyle: {
        color: '#dfba3f',
      },
    },
  ];
  let iChartCategories = [];
  if (iChartOption.categories && iChartOption.categories.length) {
    iChartOption.categories.forEach((item, index) => {
      item = Object.assign(baseCategories[index], item);
      iChartCategories.push(item);
    });
  }

  const categories = iChartOption.categories && iChartOption.categories.length ? iChartCategories : baseCategories;
  baseOption.series[0].categories = categories;
};

/**
 * 处理force配置(节点间距、节点密集度、节点连线长度、树趋近率)
 * @param {*} iChartOption
 * @param {*} baseOption
 */
const handleForce = (iChartOption, baseOption) => {
  const baseForce = {
    repulsion: 10,
    gravity: 0.12,
    edgeLength: [16, 28],
    layoutAnimation: false,
    friction: 0.05,
  };
  const { force } = iChartOption;
  if (force) {
    baseOption.series[0].force = Object.assign(baseForce, force);
  } else {
    baseOption.series[0].force = { ...baseForce };
  }
};

/**
 * 根据主题配置节点连线箭头样式
 * @param {*} iChartOption
 * @param {*} baseOption
 * @param {*} theme
 */
const handleArrow = (iChartOption, baseOption, theme) => {
  baseOption.series[0].edgeSymbol =
    iChartOption.edgeSymbol !== undefined
      ? iChartOption.edgeSymbol
      : theme === 'light'
      ? [lightArrow, 'none']
      : [darkArrow, 'none'];
};

/**
 * 处理图表位置
 * @param {*} iChartOption
 * @param {*} baseOption
 */
const handlePosition = (iChartOption, baseOption) => {
  let { chartPosition } = iChartOption;
  if (chartPosition && chartPosition.length) {
    switch (chartPosition.length) {
      case 1:
        baseOption.series[0].top = iChartOption.chartPosition[0];
        baseOption.series[0].left = iChartOption.chartPosition[0];
        break;
      case 2:
        baseOption.series[0].top = iChartOption.chartPosition[0];
        baseOption.series[0].left = iChartOption.chartPosition[1];
        break;
    }
  } else {
    chartPosition = ['center', 'center'];
    baseOption.series[0].top = chartPosition[0];
    baseOption.series[0].left = chartPosition[1];
  }
};

/**
 * 配置节点连线样式
 * @param {*} iChartOption
 * @param {*} baseOption
 * @param {*} theme
 */
const handleLineStyle = (iChartOption, baseOption, theme) => {
  const baseLineStyle = {
    width: 1,
    type: 'solid',
    color: theme === 'light' ? lightColor : darkColor,
    opacity: 1,
  };
  const { lineStyle } = iChartOption;
  if (lineStyle) {
    baseOption.series[0].lineStyle = Object.assign(baseLineStyle, lineStyle);
  } else {
    baseOption.series[0].lineStyle = { ...baseLineStyle };
  }
};

export { handleCategories, handleForce, handleArrow, handlePosition, handleLineStyle };
