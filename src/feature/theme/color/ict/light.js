import color from './colorGary';

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
  // 失效 '#818181'
  disabledColor: color.colorGray30,
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

const ictLight = {
  ...color,
  colorState,
  colorGroup,
};

export default ictLight;
export { colorState, colorGroup };
