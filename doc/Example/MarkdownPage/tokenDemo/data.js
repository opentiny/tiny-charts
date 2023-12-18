import {
  colorState as ictLightState,
  colorGroup as ictLightGroup,
} from '../../../../src/feature/theme/color/ict/light';
import {
  colorState as cloudLightState,
  colorGroup as cloudLightGroup,
} from '../../../../src/feature/theme/color/cloud/light';
import {
  colorState as bpitLightState,
  colorGroup as bpitLightGroup,
} from '../../../../src/feature/theme/color/bpit/light';
import { colorState as ictDarkState, colorGroup as ictDarkGroup } from '../../../../src/feature/theme/color/ict/dark';
import {
  colorState as cloudDarkState,
  colorGroup as cloudDarkGroup,
} from '../../../../src/feature/theme/color/cloud/dark';
import {
  colorState as bpitDarkState,
  colorGroup as bpitDarkGroup,
} from '../../../../src/feature/theme/color/bpit/dark';
import { THEMES } from '../../../../src/feature/theme/constants';
const themeOption = [
  { text: 'ict3.0 白色主题', value: THEMES.LIGHT },
  { text: 'ict3.0 深色主题', value: THEMES.DARK },
  { text: '华为云 白色主题', value: THEMES.CLOUD_LIGHT },
  { text: '华为云 深色主题', value: THEMES.CLOUD_DARK },
  { text: 'bpit 白色主题', value: THEMES.BPIT_LIGHT },
  { text: 'bpit 深色主题', value: THEMES.BPIT_DARK },
];

// 字体大小
const fontSizeOpt = [
  { text: 14, value: 14 },
  { text: 16, value: 16 },
  { text: 18, value: 18 },
  { text: 20, value: 20 },
];

// 圆角大小
const borderRadiusOpt = [
  { text: 0, value: 0 },
  { text: 4, value: 4 },
  { text: 8, value: 8 },
];

// 图元大小
const symbolSizeOpt = [
  { text: 10, value: 10 },
  { text: 12, value: 12 },
  { text: 16, value: 16 },
];

// 线条宽度
const lineWidthOpt = [
  { text: 1, value: 1 },
  { text: 2, value: 2 },
  { text: 4, value: 4 },
];

// 柱体宽度
const barWidthOpt = [
  { text: 4, value: 4 },
  { text: 8, value: 8 },
  { text: 12, value: 12 },
];

// 轴线宽度
const axisLineOpt = [
  { text: 1, value: 1 },
  { text: 2, value: 2 },
  { text: 4, value: 4 },
];

// 轴线类型
const axisTypeOpt = [
  { text: 'solid', value: 0 },
  { text: 'dashed', value: 1 },
  // { text: 'dotted', value: 2 }
];

const lightColor = {
  colorGroup1: ictLightGroup[0],
  colorGroup2: ictLightGroup[1],
  colorGroup3: ictLightGroup[2],
  colorGroup4: ictLightGroup[3],
  colorGroup5: ictLightGroup[4],
  errorColor: ictLightState.errorColor,
  mainText: '#191919',
  subText: '#4E4E4E',
  tipBoxBg: '#FFFFFF',
  axisLine: '#EEEEEE',
  splitLine: '#E8E8E8',
  pointerLine: '#BBBBBB',
  pointerBg: 'rgba(25,25,25,0.08)',
};

const darkColor = {
  colorGroup1: ictDarkGroup[0],
  colorGroup2: ictDarkGroup[1],
  colorGroup3: ictDarkGroup[2],
  colorGroup4: ictDarkGroup[3],
  colorGroup5: ictDarkGroup[4],
  errorColor: ictDarkState.errorColor,
  mainText: '#F5F5F5',
  subText: '#BBBBBB',
  tipBoxBg: '#393939',
  axisLine: 'rgba(238,238,238,.1)',
  splitLine: 'rgba(238,238,238,.1)',
  pointerLine: '#676767',
  pointerBg: 'rgba(245,245,245,0.08)',
};

const cloudLightColor = {
  colorGroup1: cloudLightGroup[0],
  colorGroup2: cloudLightGroup[1],
  colorGroup3: cloudLightGroup[2],
  colorGroup4: cloudLightGroup[3],
  colorGroup5: cloudLightGroup[4],
  errorColor: cloudLightState.errorColor,
  mainText: '#191919',
  subText: '#808080',
  tipBoxBg: '#FFFFFF',
  axisLine: '#E6E6E6',
  splitLine: '#E6E6E6',
  pointerLine: '#ECECEC',
  pointerBg: 'rgba(25,25,25,0.08)',
};

const cloudDarkColor = {
  colorGroup1: cloudDarkGroup[0],
  colorGroup2: cloudDarkGroup[1],
  colorGroup3: cloudDarkGroup[2],
  colorGroup4: cloudDarkGroup[3],
  colorGroup5: cloudDarkGroup[4],
  errorColor: cloudDarkState.errorColor,
  mainText: '#F5F5F5',
  subText: '#BBBBBB',
  tipBoxBg: '#393939',
  axisLine: 'rgba(238,238,238,.1)',
  splitLine: 'rgba(238,238,238,.1)',
  pointerLine: '#676767',
  pointerBg: 'rgba(245,245,245,0.08)',
};

const bpitLightColor = {
  colorGroup1: bpitLightGroup[0],
  colorGroup2: bpitLightGroup[1],
  colorGroup3: bpitLightGroup[2],
  colorGroup4: bpitLightGroup[3],
  colorGroup5: bpitLightGroup[4],
  errorColor: bpitLightState.errorColor,
  mainText: '#191919',
  subText: '#AEAEAE',
  tipBoxBg: '#FFFFFF',
  axisLine: 'rgba(25,25,25,0.1)',
  splitLine: 'rgba(25,25,25,0.1)',
  pointerLine: '#595959',
  pointerBg: 'rgba(25,25,25,0.08)',
};

const bpitDarkColor = {
  colorGroup1: bpitDarkGroup[0],
  colorGroup2: bpitDarkGroup[1],
  colorGroup3: bpitDarkGroup[2],
  colorGroup4: bpitDarkGroup[3],
  colorGroup5: bpitDarkGroup[4],
  errorColor: bpitDarkState.errorColor,
  mainText: '#F5F5F5',
  subText: '#BBBBBB',
  tipBoxBg: '#393939',
  axisLine: 'rgba(238,238,238,.1)',
  splitLine: 'rgba(238,238,238,.1)',
  pointerLine: '#676767',
  pointerBg: 'rgba(245,245,245,0.08)',
};

const colorOption = (themeValue = 'light') => {
  let color;
  switch (themeValue) {
    case 'light':
      color = { ...lightColor };
      break;
    case 'dark':
      color = { ...darkColor };
      break;
    case 'cloud-light':
      color = { ...cloudLightColor };
      break;
    case 'cloud-dark':
      color = { ...cloudDarkColor };
      break;
    case 'bpit-light':
      color = { ...bpitLightColor };
      break;
    case 'bpit-dark':
      color = { ...bpitDarkColor };
      break;
  }
  return [
    { text: '系统色1', color: color.colorGroup1 },
    { text: '系统色2', color: color.colorGroup2 },
    { text: '系统色3', color: color.colorGroup3 },
    { text: '系统色4', color: color.colorGroup4 },
    { text: '系统色5', color: color.colorGroup5 },
    { text: '错误色', color: color.errorColor },
    { text: '主要文本色', color: color.mainText },
    { text: '次要文本色', color: color.subText },
    { text: 'Tip背景色', color: color.tipBoxBg },
    { text: '坐标轴线颜色', color: color.axisLine },
    { text: '分隔线颜色', color: color.splitLine },
    { text: '指示器悬浮线', color: color.pointerLine },
    { text: '指示器阴影色', color: color.pointerBg },
  ];
};

export {
  themeOption,
  borderRadiusOpt,
  colorOption,
  fontSizeOpt,
  symbolSizeOpt,
  lineWidthOpt,
  barWidthOpt,
  axisLineOpt,
  axisTypeOpt,
};
