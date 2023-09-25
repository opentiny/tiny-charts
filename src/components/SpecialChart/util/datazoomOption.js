import { darkColor, lightColor } from '../util/color';

const dataZoomBackgroundColor = '#000000'; // 组件的背景颜色

const handleColor = '#ffffff'; // 手柄颜色
const handleBorderColor = '#393939'; // 手柄边框颜色
const handleHoverColor = '#ffffff'; // 手柄Hover颜色
const handleHoverBorderColor = '#4e4e4e'; // 手柄Hover边框颜色

const dataBackgroundColor = '#303030'; // 数据阴影的颜色
const selectedDataBackgroundColor = '#474747'; // 选中数据阴影的颜色
const middleHandleColor = 'rgba(255,255,255,0)'; // 两个手柄中间的填充颜色
const handleShadowColor = 'rgba(25, 25, 25, 0.5)'; // 手柄阴影的颜色
const dataLineColor = 'rgba(57, 57, 57,0.6)'; // 数据线条颜色
const selectedDataLineColor = 'rgba(57, 57, 57,1)'; // 选中部分线条颜色

export const lightDataZoom = [
  {
    borderColor: 'none', // 控制datazoom组件的边框
    type: 'slider',
    zoomLock: false,
    show: true,
    height: 24,
    left: 'center',
    bottom: 18,
    xAxisIndex: [0],
    end: 100,
    start: 0,
    backgroundColor: '#f9f9f9', // 控制组件的背景颜色
    fillerColor: middleHandleColor, // 选中范围填充颜色
    handleSize: '85%', // 控制手柄的尺寸
    handleIcon: 'path://M0 0.2 Q 0 0 0.2 0 L0.8 0 Q1 0 1 0.2 L1 2.8 Q1 3 0.8 3L0.2 3 Q0 3 0 2.8 Z', // 手柄形状
    handleStyle: {
      color: darkColor, // 手柄颜色
      shadowBlur: 10, // 阴影模糊大小
      shadowColor: 'rgba(25, 25, 25, 0.3)',
      shadowOffsetX: 0, // 阴影偏移x轴多少
      shadowOffsetY: 0, // 阴影偏移y轴多少
      opacity: 1, // 透明度
      borderColor: lightColor, // 手柄边框颜色
      borderWidth: 5, // 手柄边框宽度
      borderJoin: 'round', // 手柄边框圆角
    },
    dataBackground: {
      // 数据阴影样式
      lineStyle: {
        // 线条颜色
        color: '#f9f9f9', // 线条颜色
        join: 'round',
        cap: 'round',
      },
      areaStyle: {
        // 阴影颜色
        opacity: 1, // 阴影的透明度
        color: '#eaeaea', // 填充的颜色
      },
    },
    selectedDataBackground: {
      // 选中部分样式
      lineStyle: {
        // 线条颜色
        color: '#f9f9f9', // 线条颜色
      },
      areaStyle: {
        // 阴影颜色
        opacity: 0.9, // 阴影的透明度
        color: '#bbbbbb', // 填充的颜色
      },
    },
    moveHandleSize: '0', // 移动手柄的尺寸高度
    emphasis: {
      handleStyle: {
        color: '#191919',
        borderColor: lightColor,
      },
    },
  },
  {
    xAxisIndex: [0],
    end: 100,
    start: 0,
    type: 'inside',
  },
];

export const darkDataZoom = [
  {
    type: 'slider',
    show: true,
    height: 24,
    bottom: 18,
    left: 'center',
    start: 0,
    end: 100,
    zoomLock: false,
    xAxisIndex: [0],
    borderColor: 'none', // 控制datazoom组件的边框
    backgroundColor: dataZoomBackgroundColor, // 控制组件的背景颜色
    fillerColor: middleHandleColor, // 选中范围填充颜色
    handleSize: '85%', // 控制手柄的尺寸
    handleIcon: 'path://M0 0.2 Q 0 0 0.2 0 L0.8 0 Q1 0 1 0.2 L1 2.8 Q1 3 0.8 3L0.2 3 Q0 3 0 2.8 Z', // 手柄形状
    handleStyle: {
      color: handleColor, // 手柄颜色
      shadowBlur: 16, // 阴影模糊大小
      shadowColor: handleShadowColor,
      shadowOffsetX: 0, // 阴影偏移x轴多少
      shadowOffsetY: 0, // 阴影偏移y轴多少
      opacity: 1, // 透明度
      borderColor: handleBorderColor, // 手柄边框颜色
      borderWidth: 5, // 手柄边框宽度
      borderJoin: 'round', // 手柄边框圆角
    },
    dataBackground: {
      // 数据阴影样式
      lineStyle: {
        // 线条颜色
        color: dataLineColor, // 线条颜色
        join: 'round',
        cap: 'round',
      },
      areaStyle: {
        // 阴影颜色
        opacity: 0.8, // 阴影的透明度
        color: dataBackgroundColor, // 填充的颜色
      },
    },
    selectedDataBackground: {
      // 选中部分样式
      lineStyle: {
        // 线条颜色
        color: selectedDataLineColor, // 线条颜色
      },
      areaStyle: {
        // 阴影颜色
        opacity: 0.9, // 阴影的透明度
        color: selectedDataBackgroundColor, // 填充的颜色
      },
    },
    emphasis: {
      handleStyle: {
        color: handleHoverColor,
        borderColor: handleHoverBorderColor,
      },
    },
    moveHandleSize: '0', // 移动手柄的尺寸高度
  },
  {
    type: 'inside',
    xAxisIndex: [0],
    start: 0,
    end: 100,
  },
];
