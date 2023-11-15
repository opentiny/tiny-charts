// 灰阶色彩(用于文本及相关颜色的选取)
const colorGary = {
  colorGray0: '#FFFFFF',
  colorGray5: '#FAFAFA',
  colorGray10: '#F5F5F5',
  colorGray20: '#EBEBEB',
  colorGray30: '#DBDBDB',
  colorGray40: '#C2C2C2',
  colorGray50: '#808080',
  colorGray60: '#595959',
  colorGray70: '#333333',
  colorGray80: '#262626',
  colorGray90: '#191919',
  colorGray100: '#000000',
};

// 图表内置的颜色组
const colorGroup = ['#1476FF', '#0BB8B2', '#6E51E0', '#5CB300', '#FCBE1E', '#33BCF2', '#BA53E6', '#EB4696'];

// 图表的状态颜色
const colorState = {
  // 紧急色
  errorColor: '#F23030',
  // 重要告警色
  warningColor: '#FF8800',
  // 次要告警色
  subwarningColor: '#F7D916',
  // 成功色
  successColor: '#5CB300',
  // 提示色
  infoColor: '#1476FF',
  // 失效
  disabledColor: colorGary.colorGray40,
};

const cloudColor = {
  ...colorGary,
  colorState,
  colorGroup,
};

export default cloudColor;
export { colorGary, colorState, colorGroup };
