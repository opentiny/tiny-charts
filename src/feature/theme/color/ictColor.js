/** 本色彩规范为ICT基础设施通用UI规范3.0**/

// 灰阶色彩(用于文本及相关颜色的选取)
const colorGary = {
  colorGray0: '#FFFFFF',
  colorGray5: '#F5F5F5',
  colorGray10: '#EEEEEE',
  colorGray20: '#BBBBBB',
  colorGray30: '#939393',
  colorGray40: '#818181',
  colorGray50: '#676767',
  colorGray60: '#4E4E4E',
  colorGray70: '#393939',
  colorGray80: '#272727',
  colorGray90: '#191919',
  colorGray100: '#000000',
};

// 图表的状态颜色
const colorState = {
  // 紧急色
  errorColor: '#F43146',
  // 重要告警色
  warningColor: '#EC6F1A',
  // 次要告警色
  subwarningColor: '#EEBA18',
  // 成功色
  successColor: '#2DA769',
  // 提示色
  infoColor: '#5990FD',
  // 失效 '#939393'
  disabledColor: colorGary.colorGray30,
};

// 图表内置的颜色组
const colorGroup = [
  // Blue 40
  '#6D8FF0',
  // Mint 40
  '#00A874',
  // Purple 40
  '#BD72F0',
  // Cyan 30
  '#54BCCE',
  // Yellow 20
  '#FDC000',
  // Indido 40
  '#9185F0',
  // Cyan 40
  '#00A2B5',
];

const colorTP = 'transparent';

const ictColor = {
  ...colorGary,
  colorState,
  colorGroup,
  colorTP,
};

export default ictColor;

export { colorGary, colorState, colorGroup };
