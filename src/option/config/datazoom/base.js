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

function getBaseOption() {
  return {
    end: 100,
    start: 0,
    height: 24,
    bottom: 18,
    show: false,
    type: 'slider',
    left: 'center',
    xAxisIndex: [0],
    zoomLock: false,
    borderColor: Theme.config.dataZoomBorderColor, // 边框
    borderRadius: 0,
    backgroundColor: Theme.config.dataZoomBackgroundColor, // 背景颜色
    fillerColor: Theme.config.dataZoomFillColor, // 选中范围填充颜色
    handleSize: '68%', // 控制手柄的尺寸
    handleIcon: 'path://M0 0 L5 0 L5 12 L0 12 L0 0 Z', // 手柄形状
    showDetail: false,
    handleStyle: {
      color: Theme.config.dataZoomHandleColor,  // 手柄颜色
      shadowBlur: Theme.config.dataZoomHandleShadowBlur,
      shadowColor: Theme.config.dataZoomHandleShadowColor,
      shadowOffsetX: 0, // 阴影偏移x轴多少
      shadowOffsetY: Theme.config.dataZoomHandleShadowOffsetY, // 阴影偏移y轴多少
      opacity: 1, // 透明度
      borderColor: Theme.config.dataZoomHandleBorderColor, // 手柄边框颜色
      borderWidth: 6, // 手柄边框宽度
      borderJoin: 'round', // 手柄边框圆角
    },
    dataBackground: {
      lineStyle: {
        width: Theme.config.dataZoomDataBackgroundLineWidth,
        color: Theme.config.dataZoomDataBackgroundLineColor, // 线条颜色
        join: 'round',
        cap: 'round',
      },
      areaStyle: {
        opacity: 1, // 阴影的透明度
        color: Theme.config.dataZoomDataBackgroundAreaColor, // 填充的颜色
      },
    },
    selectedDataBackground: {
      // 选中部分样式
      lineStyle: {
        width: Theme.config.dataZoomDataBackgroundLineWidth,
        color: Theme.config.dataZoomSelectedDataLineColor, // 线条颜色
      },
      areaStyle: {
        opacity: 1, // 阴影的透明度
        color: Theme.config.dataZoomSelectedDataAreaColor, // 填充的颜色
      },
    },
    moveHandleSize: '0', // 移动手柄的尺寸高度
    emphasis: {
      handleStyle: {
        color: Theme.config.dataZoomEmphasisHandleColor,
        borderColor: Theme.config.dataZoomEmphasisHandleBorderColor,
      },
    },
  }
}

function getMiniBaseOption() {
  return {
    end: 100,
    start: 0,
    height: 6,
    bottom: 18,
    show: false,
    type: 'slider',
    left: 'center',
    xAxisIndex: [0],
    zoomLock: false,
    borderColor: Theme.config.dataZoomBorderColorMini, // 边框
    borderRadius: 0,
    backgroundColor: Theme.config.dataZoomBackgroundColor, // 背景颜色
    fillerColor: Theme.config.dataZoomFillColor, // 选中范围填充颜色
    handleSize: '100%', // 控制手柄的尺寸
    handleIcon: 'path://M0 0 L8 0 L8 12 L0 12 L0 0 Z', // 手柄形状
    showDetail: false,
    //min形态关闭数据阴影,所以dataBackground和selectedDataBackground不配置
    showDataShadow: false,
    handleStyle: {
      color: Theme.config.dataZoomHandleColor,  // 手柄颜色
      shadowBlur: Theme.config.dataZoomHandleShadowBlur, // 阴影模糊大小
      shadowColor: Theme.config.dataZoomHandleShadowColorMini,
      shadowOffsetX: 0, // 阴影偏移x轴多少
      shadowOffsetY: Theme.config.dataZoomHandleShadowOffsetY, // 阴影偏移y轴多少
      opacity: 1, // 透明度
      borderColor: Theme.config.dataZoomHandleBorderColor, // 手柄边框颜色
      borderWidth: 3, // 手柄边框宽度
      borderJoin: 'round', // 手柄边框圆角
    },
    moveHandleSize: '0', // 移动手柄的尺寸高度
    emphasis: {
      handleStyle: {
        color: Theme.config.dataZoomEmphasisHandleColor,
        borderColor: Theme.config.dataZoomEmphasisHandleBorderColor
      },
    },
  }
}
function base(iDataZoom) {
  const { mini } = iDataZoom
  return mini ? getMiniBaseOption() : getBaseOption()
}

export default base;
