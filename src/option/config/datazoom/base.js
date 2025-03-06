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
import Token from '../../../feature/token';

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
    borderColor: Token.config.dataZoomBorderColor, // 边框
    borderRadius: 0,
    backgroundColor: Token.config.dataZoomBackgroundColor, // 背景颜色
    fillerColor: Token.config.dataZoomFillColor, // 选中范围填充颜色
    handleSize: '68%', // 控制手柄的尺寸
    handleIcon: 'path://M0 0 L5 0 L5 12 L0 12 L0 0 Z', // 手柄形状
    showDetail: false,
    handleStyle: {
      color: Token.config.dataZoomHandleColor,  // 手柄颜色
      shadowBlur: Token.config.dataZoomHandleShadowBlur,
      shadowColor: Token.config.dataZoomHandleShadowColor,
      shadowOffsetX: 0, // 阴影偏移x轴多少
      shadowOffsetY: Token.config.dataZoomHandleShadowOffsetY, // 阴影偏移y轴多少
      opacity: 1, // 透明度
      borderColor: Token.config.dataZoomHandleBorderColor, // 手柄边框颜色
      borderWidth: 6, // 手柄边框宽度
      borderJoin: 'round', // 手柄边框圆角
    },
    dataBackground: {
      lineStyle: {
        width: Token.config.dataZoomDataBackgroundLineWidth,
        color: Token.config.dataZoomDataBackgroundLineColor, // 线条颜色
        join: 'round',
        cap: 'round',
      },
      areaStyle: {
        opacity: 1, // 阴影的透明度
        color: Token.config.dataZoomDataBackgroundAreaColor, // 填充的颜色
      },
    },
    selectedDataBackground: {
      // 选中部分样式
      lineStyle: {
        width: Token.config.dataZoomDataBackgroundLineWidth,
        color: Token.config.dataZoomSelectedDataLineColor, // 线条颜色
      },
      areaStyle: {
        opacity: 1, // 阴影的透明度
        color: Token.config.dataZoomSelectedDataAreaColor, // 填充的颜色
      },
    },
    moveHandleSize: '0', // 移动手柄的尺寸高度
    emphasis: {
      handleStyle: {
        color: Token.config.dataZoomEmphasisHandleColor,
        borderColor: Token.config.dataZoomEmphasisHandleBorderColor,
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
    borderColor: Token.config.dataZoomBorderColorMini, // 边框
    borderRadius: 0,
    backgroundColor: Token.config.dataZoomBackgroundColor, // 背景颜色
    fillerColor: Token.config.dataZoomFillColor, // 选中范围填充颜色
    handleSize: '100%', // 控制手柄的尺寸
    handleIcon: 'path://M0 0 L8 0 L8 12 L0 12 L0 0 Z', // 手柄形状
    showDetail: false,
    //min形态关闭数据阴影,所以dataBackground和selectedDataBackground不配置
    showDataShadow: false,
    handleStyle: {
      color: Token.config.dataZoomHandleColor,  // 手柄颜色
      shadowBlur: Token.config.dataZoomHandleShadowBlur, // 阴影模糊大小
      shadowColor: Token.config.dataZoomHandleShadowColorMini,
      shadowOffsetX: 0, // 阴影偏移x轴多少
      shadowOffsetY: Token.config.dataZoomHandleShadowOffsetY, // 阴影偏移y轴多少
      opacity: 1, // 透明度
      borderColor: Token.config.dataZoomHandleBorderColor, // 手柄边框颜色
      borderWidth: 3, // 手柄边框宽度
      borderJoin: 'round', // 手柄边框圆角
    },
    moveHandleSize: '0', // 移动手柄的尺寸高度
    emphasis: {
      handleStyle: {
        color: Token.config.dataZoomEmphasisHandleColor,
        borderColor: Token.config.dataZoomEmphasisHandleBorderColor
      },
    },
  }
}
function base(iDataZoom) {
  const { mini } = iDataZoom
  return mini ? getMiniBaseOption() : getBaseOption()
}

export default base;
