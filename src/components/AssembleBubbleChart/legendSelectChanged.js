import { handleSeriesData } from './handleSeriesData';
import Theme from '../../feature/theme';
function color(theme, items, type) {
  const colorBase= Theme.color.base   
  items.color = colorBase.subg;
  items.colorSec = colorBase.subg;
  items.colorBg = colorBase.subg;
  items.textColor = colorBase.subfont ;
  if (items.depth >= 1 && type === 'nested') {
    items.colorSec =colorBase.bg;
  }
}

function show(params, items, itemc, theme, type) {
  if (!params.selected[itemc]) {
    if (items.type === itemc) {
      color(theme, items, type);
    }
  }
}

// 点击图例消失
export function legendDisappear(paramsd) {
  const { seriesData, params, theme, type, baseOpt, chartInstance } = paramsd;
  seriesData.forEach(items => {
    if (items.type === params.name) {
      color(theme, items, type);
    }
  });
  baseOpt.dataset[0].source = seriesData;
  chartInstance.setOption(baseOpt);
}

// 点击图例出现
export function legendShow(paramss) {
  const { seriesData, type, theme, params, baseOpt, chartInstance } = paramss;
  seriesData.forEach(items => {
    if (items.type !== params.name) {
      Object.keys(params.selected).forEach(itemc => {
        show(params, items, itemc, theme, type);
      });
    }
  });
  baseOpt.dataset[0].source = seriesData;
  chartInstance.setOption(baseOpt);
}

// 点击图例事件，保存原始数据
export function legendSelectChanged(iChartOption) {
  const distance = iChartOption.distance;
  const type = iChartOption.type;
  const theme = iChartOption.theme;
  let beforeData = [];
  // beforeData是seriesData的原始数据
  beforeData = handleSeriesData(iChartOption, type, beforeData);
  const depthMore = [];
  beforeData.forEach(item => {
    if (item.children) {
      Object.keys(item.children).forEach(items => {
        depthMore.push(item.children[items]);
      });
    }
  });
  beforeData.forEach(item => {
    depthMore.forEach(itemd => {
      if (itemd.type === item.type) {
        beforeData.push(itemd);
      }
    });
  });
  return { distance, type, theme, beforeData };
}
