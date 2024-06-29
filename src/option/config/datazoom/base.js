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
import Theme from '../../../feature/token';
import { codeToRGB } from '../../../util/color';

function getBaseOption() {
  return [
    {
      end: 100,
      start: 0,
      height: 24,
      bottom: 18,
      show: false,
      type: 'slider',
      left: 'center',
      xAxisIndex: [0],
      zoomLock: false,
      borderColor: Theme.config.dataZoomBackgroundColor, // 边框
      borderRadius: 0,
      backgroundColor: Theme.config.dataZoomBackgroundColor, // 背景颜色
      fillerColor: codeToRGB(Theme.config.colorState.colorInfo, 0.1), // 选中范围填充颜色
      handleSize: '68%', // 控制手柄的尺寸
      handleIcon: 'path://M0 0 L5 0 L5 12 L0 12 L0 0 Z', // 手柄形状
      showDetail:false,
      handleStyle: {
        color: Theme.config.dataZoomHandleColor,  // 手柄颜色
        shadowBlur: 12, // 阴影模糊大小
        shadowColor: Theme.config.dataZoomHandleShadowColor,
        shadowOffsetX: 0, // 阴影偏移x轴多少
        shadowOffsetY: 0, // 阴影偏移y轴多少
        opacity: 1, // 透明度
        borderColor: Theme.config.dataZoomHandleBorderColor, // 手柄边框颜色
        borderWidth: 6, // 手柄边框宽度
        borderJoin: 'round', // 手柄边框圆角
      },
      dataBackground: {
        lineStyle: {
          color: Theme.config.dataBackgroundLineColor, // 线条颜色
          join: 'round',
          cap: 'round',
        },
        areaStyle: {
          opacity: 1, // 阴影的透明度
          color: Theme.config.dataBackgroundAreaColor, // 填充的颜色
        },
      },
      selectedDataBackground: {
        // 选中部分样式
        lineStyle: {
          color: undefined, // 线条颜色
        },
        areaStyle: {
          opacity: 1, // 阴影的透明度
          color: undefined, // 填充的颜色
        },
      },
      moveHandleSize: '0', // 移动手柄的尺寸高度
      emphasis: {
        handleStyle: {
          color: Theme.config.dataZoomEmphasisHandleColor,
          borderColor: Theme.config.dataZoomEmphasisHandleBorderColor,
        },
      },
    },
  ];
}

function base() {
  const theme=Theme.themeName
  const option = getBaseOption()
  if (theme.includes('dark')) {
    // 选中区域内的线条颜色和面积颜色
    option[0].selectedDataBackground.lineStyle.color = '#1B3F86';
    option[0].selectedDataBackground.areaStyle.color = '#1B3F86'
  } else {
    // 选中区域内的线条颜色和面积颜色
    option[0].selectedDataBackground.lineStyle.color = '#8CA3FA';
    option[0].selectedDataBackground.areaStyle.color = '#8CA3FA';
  }
  return option;
}

export default base;
