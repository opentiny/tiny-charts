import { codeToHex, codeToRGB } from '../../util/color';
import megre from '../../util/megre';
import Theme from '../../feature/theme';

// 配置数据
export function handleData(iChartOption, baseOpt) {
  const dataName = [];
  const dataValue = [];
  iChartOption.data.forEach(item => {
    const data = iChartOption.data;
    if (data && data.length > 0) {
      const data = iChartOption.data;
      if (data && data.length > 0) {
        const keys = Object.keys(data[0]);
        for (let i = 0; i < keys.length; i++) {
          iChartOption.xAxis = keys[i];
          break;
        }
      }
    }
    dataName.push(item[iChartOption.xAxis]);
    dataValue.push(item.value);
  });
  baseOpt.xAxis.data = dataName;
  baseOpt.series[0].data = dataValue;
}

// 配置山峰颜色及透明度
export function handleColor(iChartOption, baseOpt) {
  // 配置显示的颜色
  baseOpt.series[0].itemStyle = {
    // opacity: iChartOption.opacity,
    normal: {
      color(params) {
        return codeToRGB(
          codeToHex(iChartOption.color[params.dataIndex % iChartOption.color.length]),
          iChartOption.opacity || 0.8,
        );
      },
    },
  };
}

// 配置文本
export function handleText(iChartOption, baseOpt) {
  const colorBase= Theme.color.base
  // x轴坐标文本
  // baseOpt.xAxis.axisLabel = {
  //   color:
  //     iChartOption.text && iChartOption.text.fontColor
  //       ? iChartOption.text.fontColor
  //       : colorBase.axislabel,
  //   fontSize: iChartOption.text && iChartOption.text.fontSize ? iChartOption.text && iChartOption.text.fontSize : 12,
  // };
  // 山峰头部文本
  baseOpt.series[0].label = {
    normal: {
      show: iChartOption.text && iChartOption.text.show === true ? iChartOption.text && iChartOption.text.show : false,
      position: 'top',
      textStyle: {
        fontSize:
          iChartOption.text && iChartOption.text.fontSize ? iChartOption.text && iChartOption.text.fontSize : 12,
        color:
          iChartOption.text && iChartOption.text.fontColor
            ? iChartOption.text.fontColor
            : colorBase.axislabel,
      },
    },
  };
}

// 配置ChartPadding
export function handlePadding(iChartOption, baseOpt) {
  baseOpt['grid'] = {
    top: iChartOption.padding[0],
    right: iChartOption.padding[1],
    bottom: iChartOption.padding[2],
    left: iChartOption.padding[3] + 25,
  };
}

// 配置相邻山峰间隔
export function handleCoincide(iChartOption, baseOpt) {
  baseOpt.series[0]['barCategoryGap'] = iChartOption.coincide ? iChartOption.coincide : '-100%';
}

// 配置渐变色
export function setGradientColor(baseOpt, color, gradientColor, opacity, iChartOption) {
  if (gradientColor) {
    baseOpt.series[0].itemStyle = {
      normal: {
        color(params) {
          return {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: codeToRGB(codeToHex(gradientColor[params.dataIndex % gradientColor.length]), opacity || 0.8),
              },
              {
                offset: 1,
                color: codeToRGB(
                  codeToHex(iChartOption.color[params.dataIndex % iChartOption.color.length]),
                  opacity || 0.8,
                ),
              },
            ],
            globalCoord: false,
          };
        },
      },
    };
  }
}

// 配置阈值线(整体变色，超过部分变色)
export function handleMarkLine(baseOpt, iChartOpt) {
  const { markLine, color, opacity } = iChartOpt;
  if (markLine) {
    for (const i in markLine) {
      if (i === 'top' || i === 'bottom') {
        // series插入阈值线
        baseOpt.series[0].markLine.data.push({ yAxis: markLine[i] });
        // 重置数据
        baseOpt.series[0].data.forEach((item, index) => {
          if (item > markLine[i] && i === 'top') {
            // 整体变色
            if (markLine.topWholeColor) {
              baseOpt.series[0].data[index] = {
                value: item,
                itemStyle: {
                  color: markLine.color || '#F43146',
                },
              };
            } else {
              // 超出部分变色
              baseOpt.series[0].data[index] = {
                value: item,
                itemStyle: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    colorStops: [
                      {
                        offset: 0,
                        color: markLine.color || '#F43146',
                      },
                      {
                        offset: (item - markLine[i]) / item,
                        color: markLine.color || '#F43146',
                      },
                      {
                        offset: (item - markLine[i]) / item,
                        color: codeToRGB(
                          codeToHex(color[index % color.length]),
                          opacity || 0.8,
                        ),
                      },
                      {
                        offset: 1,
                        color: codeToRGB(
                          codeToHex(color[index % color.length]),
                          opacity || 0.8,
                        ),
                      },
                    ],
                  },
                },
              };
            }
          } else if (item < markLine[i] && i === 'bottom') {
            // 低于bottom的直接整体变色，不用判断
            baseOpt.series[0].data[index] = {
              value: item,
              itemStyle: {
                color: markLine.color || '#F43146',
              },
            };
          }
        });
      }
    }
    // 合并属性
    megre(baseOpt.series[0].markLine, markLine);
  }
}