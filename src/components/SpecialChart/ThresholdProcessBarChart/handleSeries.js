import { isArray } from '../../../util/type';
import { getColor } from '../../../util/color';

const markLine = {
  symbol: ['path://M0 0 L100 0 L50 100 Z'],
  symbolSize: [12, 12],
  symbolRotate: 180,
  silent: false,
  lineStyle: {
    color: '#F46465',
    type: 'dashed',
    width: 1,
  },
  label: {
    show: false,
  },
  emphasis: {
    disabled: false,
  },
  data: [{ xAxis: 50 }],
};

// 线性渐变
function handleProcessLinearGradient(iChartOption, serie, barData) {
  // 判断有没有阈值线
  if (iChartOption.markLine) {
    const { value, bounds = 'right', itemColor = ['#F43146'] } = iChartOption.markLine;
    switch (bounds) {
      case 'left':
        serie.itemStyle.color = params => {
          const itemData = barData[params.dataIndex];
          const isItemColorArr = isArray(itemColor);
          const color1 = isItemColorArr ? itemColor[0] : itemColor?.initialColor[0];
          const color2 = isItemColorArr ? itemColor[0] : itemColor?.endColor[0];
          if (itemData <= value) {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: color1,
                },
                {
                  offset: 1,
                  color: color2,
                },
              ],
              globalCoord: false, // 缺省为 false
            };
          } else {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color:
                    (iChartOption.linearGradient &&
                      iChartOption.linearGradient.initialColor &&
                      iChartOption.linearGradient.initialColor[0 % iChartOption.linearGradient.initialColor.length]) ||
                    iChartOption.color[0], // 0% 处的颜色
                },
                {
                  offset: 1,
                  color:
                    (iChartOption.linearGradient &&
                      iChartOption.linearGradient.endColor &&
                      iChartOption.linearGradient.endColor[0 % iChartOption.linearGradient.endColor.length]) ||
                    iChartOption.color[0], // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            };
          }
        };
        break;
      default:
        serie.itemStyle.color = params => {
          const itemData = barData[params.dataIndex];
          const isItemColorArr = isArray(itemColor);
          const color1 = isItemColorArr ? itemColor[0] : itemColor?.initialColor[0];
          const color2 = isItemColorArr ? itemColor[0] : itemColor?.endColor[0];
          if (itemData <= value) {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color:
                    (iChartOption.linearGradient &&
                      iChartOption.linearGradient.initialColor &&
                      iChartOption.linearGradient.initialColor[0 % iChartOption.linearGradient.initialColor.length]) ||
                    iChartOption.color[0], // 0% 处的颜色
                },
                {
                  offset: 1,
                  color:
                    (iChartOption.linearGradient &&
                      iChartOption.linearGradient.endColor &&
                      iChartOption.linearGradient.endColor[0 % iChartOption.linearGradient.endColor.length]) ||
                    iChartOption.color[0], // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            };
          } else {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: color1,
                },
                {
                  offset: 1,
                  color: color2,
                },
              ],
              globalCoord: false, // 缺省为 false
            };
          }
        };
        break;
    }
    return;
  }
  serie.itemStyle = null;
  serie.color = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color:
          (iChartOption.linearGradient &&
            iChartOption.linearGradient.endColor &&
            iChartOption.linearGradient.endColor[0 % iChartOption.linearGradient.endColor.length]) ||
          iChartOption.color[0], // 0% 处的颜色
      },
      {
        offset: 1,
        color:
          (iChartOption.linearGradient &&
            iChartOption.linearGradient.initialColor &&
            iChartOption.linearGradient.initialColor[0 % iChartOption.linearGradient.initialColor.length]) ||
          iChartOption.color[0], // 100% 处的颜色
      },
    ],
    globalCoord: false, // 缺省为 false
  };
}

function handleCommonColor(iChartOption, serie, barData) {
  // 判断有没有阈值线
  if (iChartOption.markLine) {
    const { value, bounds = 'right', itemColor = ['#F43146'] } = iChartOption.markLine;
    switch (bounds) {
      case 'left':
        serie.itemStyle.color = params => {
          const itemData = barData[params.dataIndex];
          const isItemColorArr = isArray(itemColor);
          const color1 = isItemColorArr ? itemColor[0] : itemColor?.initialColor[0];
          const color2 = isItemColorArr ? itemColor[0] : itemColor?.endColor[0];
          if (itemData <= value) {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: color1,
                },
                {
                  offset: 1,
                  color: color2,
                },
              ],
              globalCoord: false, // 缺省为 false
            };
          } else {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color:
                    (iChartOption.linearGradient &&
                      iChartOption.linearGradient.initialColor &&
                      iChartOption.linearGradient.initialColor[0 % iChartOption.linearGradient.initialColor.length]) ||
                    iChartOption.color[0], // 0% 处的颜色
                },
                {
                  offset: 1,
                  color:
                    (iChartOption.linearGradient &&
                      iChartOption.linearGradient.endColor &&
                      iChartOption.linearGradient.endColor[0 % iChartOption.linearGradient.endColor.length]) ||
                    iChartOption.color[0], // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            };
          }
        };
        break;
      default:
        serie.itemStyle.color = params => {
          const itemData = barData[params.dataIndex];
          const isItemColorArr = isArray(itemColor);
          const color1 = isItemColorArr ? itemColor[0] : itemColor?.initialColor[0];
          const color2 = isItemColorArr ? itemColor[0] : itemColor?.endColor[0];
          if (itemData <= value) {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color:
                    (iChartOption.linearGradient &&
                      iChartOption.linearGradient.initialColor &&
                      iChartOption.linearGradient.initialColor[0 % iChartOption.linearGradient.initialColor.length]) ||
                    iChartOption.color[0], // 0% 处的颜色
                },
                {
                  offset: 1,
                  color:
                    (iChartOption.linearGradient &&
                      iChartOption.linearGradient.endColor &&
                      iChartOption.linearGradient.endColor[0 % iChartOption.linearGradient.endColor.length]) ||
                    iChartOption.color[0], // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            };
          } else {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: color1,
                },
                {
                  offset: 1,
                  color: color2,
                },
              ],
              globalCoord: false, // 缺省为 false
            };
          }
        };
        break;
    }
    return;
  }
  serie.itemStyle.color = function (params) {
    const colorCommon = getColor(iChartOption.color, params.dataIndex);
    return {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: colorCommon,
        },
        {
          offset: 1,
          color: colorCommon,
        },
      ],
      globalCoord: false, // 缺省为 false
    };
  };
}
export function handleColor(baseOption, iChartOption, color, dataSet) {
  const { barData } = dataSet;
  const { linearGradient } = iChartOption;
  // 处理渐变色
  if (linearGradient) {
    handleProcessLinearGradient(iChartOption, baseOption.series[0], barData);
    return;
  }
  // 处理没有渐变色的柱状颜色
  handleCommonColor(iChartOption, baseOption.series[0], barData);
}
export function handleSeries(baseOption, iChartOption, color, dataSet, data) {
  const { barData, maxValue } = dataSet;
  baseOption.series[0].data = barData;
  baseOption.series[1].data = new Array(barData.length).fill(maxValue);
  if (iChartOption.markLine) {
    baseOption.series[1].markLine = markLine;
    baseOption.series[1].markLine.data[0].xAxis = iChartOption.markLine.value;
    if (iChartOption.markLine.color) baseOption.series[1].markLine.lineStyle.color = iChartOption.markLine.color;
  }
  // 右侧label
  baseOption.series[1].label.formatter = function (params) {
    if (iChartOption.unit) {
      return `${iChartOption.minWidth ? data[params.dataIndex].value : barData[params.dataIndex]}${iChartOption.unit}`;
    }
    return `${iChartOption.minWidth ? data[params.dataIndex].value : barData[params.dataIndex]}`;
  };

  // 右侧数据文本显示省略
  if (iChartOption.text) {
    Object.assign(baseOption.series[1].label, iChartOption.text);
  }

  if (iChartOption.barWidth) {
    baseOption.series.forEach(item => {
      item.barWidth = iChartOption.barWidth;
    });
  }
}
