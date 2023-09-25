import { getColor, codeToRGB } from '../../util/color';
import cloneDeep from '../../util/cloneDeep'
import { markLineDefault } from '../../option/config/mark';
import Theme from '../../feature/theme';
export const seriesInit = {
  // 数据
  data: [],
  // 气泡图
  type: 'scatter',
  // 鼠标hover时显示label，并且其他legend变成灰色
  emphasis: {
    label: {
      show: true,
      color: '#ffffff',
      fontSize: 14,
      formatter(param) {
        return param.data[3];
      },
      position: 'top',
    },
  },
  // 气泡样式
  itemStyle: {},
};

/**
 * 组装echarts所需要的series
 * @param {图表数据} seriesData
 * @param {图例数据} legendData
 * @param {主题} theme
 * @param {是否面积图} isArea
 * @param {是否曲线} isSmooth
 * @param {是否阶梯线} isStep
 * @param {阈值线} markLine
 * @param {阈值箭头} markPoint
 * @param {颜色集合} colors
 * @returns
 */
export function setSeries({ theme, legendData, data, markLine, color }) {
  // 更改hover时显示的label颜色
  seriesInit.emphasis.label.color = Theme.color.base.axislabel
  const series = [];
  legendData.forEach((legend, index) => {
    const seriesUnit = cloneDeep(seriesInit);
    const itemColor = getColor(color, index);
    const itemBorderColor = codeToRGB(itemColor, 0.2);
    // 阈值线
    if (markLine) {
      seriesUnit.markLine = cloneDeep(markLineDefault);
      if (markLine.y) {
        seriesUnit.markLine.data.push({ yAxis: markLine.y });
      }
      if (markLine.x) {
        seriesUnit.markLine.data.push({ xAxis: markLine.x });
      }
    }
    // 数据 / 数据名称
    seriesUnit.name = legend;
    seriesUnit.data = data[legend];
    seriesUnit.itemStyle = {
      color: itemBorderColor,
      borderColor: itemColor,
      borderWidth: 1,
    };
    series.push(seriesUnit);
  });
  return series;
}
