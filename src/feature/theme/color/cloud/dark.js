//  *********cloud图表深色主题目前没有相应的成型规范，色阶方案采用ict的色阶，内置的颜色组和告警色使用相应的华为云的规范色值*********
// import colorGary from './colorGary';
import colorGary from '../ict/colorGary';
// 图表的状态颜色
const colorState = {
  // 紧急色
  errorColor: '#F43146',
  // 重要告警色
  warningColor: '#EC6F1A',
  // 次要告警色
  subwarningColor: '#EEBA18',
  // 成功色
  successColor: '#0D9458',
  // 提示色
  infoColor: '#5990FD',
  // 失效 '#C2C2C2'
  disabledColor: colorGary.colorGray40,
};

// 图表内置的颜色组
const colorGroup = [
  // Blue 60
  '#1F55B5',
  // Mint 50
  '#278661',
  // Purple 60
  '#8A21BC',
  // Cyan 60
  '#26616B',
  // Yellow 40
  '#B98C1D',
  // Indido 50
  '#745EF7',
  // Cyan 50
  '#2A8290',
];

const cloudDark = {
  ...colorGary,
  colorState,
  colorGroup,
};

export default cloudDark;
export { colorGroup, colorState };
