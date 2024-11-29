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
import Theme from '../../feature/token';
import { codeToHex, codeToRGB } from '../../util/color';
import merge from '../../util/merge';
import chartToken from './chartToken';

// 配置数据
export function handleData(iChartOption, baseOpt) {
  const dataName = [];
  iChartOption.data.forEach(item => {
    dataName.push(item.name);
  });
  baseOpt.xAxis.data = dataName;
  baseOpt.series[0].data = iChartOption.data;
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
  // 山峰头部文本
  baseOpt.series[0].label = {
    normal: {
      show: iChartOption.text && iChartOption.text.show === true ? iChartOption.text && iChartOption.text.show : false,
      position: 'top',
      textStyle: {
        fontSize:
          iChartOption.text && iChartOption.text.fontSize ? iChartOption.text && iChartOption.text.fontSize : 12,
        color: iChartOption.text && iChartOption.text.fontColor ? iChartOption.text.fontColor : chartToken.labelColor,
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

const colorWhole = (baseOpt, item, markLine, colorError, index) => {
  baseOpt.series[0].data[index] = {
    value: item,
    itemStyle: {
      color: markLine.color || colorError,
    },
  };
};

const colorExcess = (baseOpt, iChartOpt, item, index, i) => {
  const { markLine, color, opacity } = iChartOpt;
  const { colorError } = Theme.config.colorState;
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
            color: markLine.color || colorError,
          },
          {
            offset: (item - markLine[i]) / item,
            color: markLine.color || colorError,
          },
          {
            offset: (item - markLine[i]) / item,
            color: codeToRGB(codeToHex(color[index % color.length]), opacity || 0.8),
          },
          {
            offset: 1,
            color: codeToRGB(codeToHex(color[index % color.length]), opacity || 0.8),
          },
        ],
      },
    },
  };
};

const reviseMarkLineData = (baseOpt, iChartOpt, i) => {
  const { markLine } = iChartOpt;
  const { colorError } = Theme.config.colorState;
  baseOpt.series[0].data.forEach((item, index) => {
    if (item > markLine[i] && i === 'top') {
      // 整体变色
      if (markLine.topWholeColor) {
        colorWhole(baseOpt, item, markLine, colorError, index);
      } else {
        // 超出部分变色
        colorExcess(baseOpt, iChartOpt, item, index, i);
      }
    } else if (item < markLine[i] && i === 'bottom') {
      // 低于bottom的直接整体变色，不用判断
      colorWhole(baseOpt, item, markLine, colorError, index)
    }
  });
};


// 配置阈值线(整体变色，超过部分变色)
export function handleMarkLine(baseOpt, iChartOpt) {
  const { markLine } = iChartOpt;
  if (markLine) {
    for (const i in markLine) {
      if (i === 'top' || i === 'bottom') {
        // series插入阈值线
        baseOpt.series[0].markLine.data.push({ yAxis: markLine[i] });
        // 重置数据
        reviseMarkLineData(baseOpt, iChartOpt, i);
      }
    }
    // 合并属性
    merge(baseOpt.series[0].markLine, markLine);
  }
}



