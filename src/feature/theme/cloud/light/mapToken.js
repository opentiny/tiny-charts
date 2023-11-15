import cloudBasicToken from './basicToken';
import getMapToken from '../util/getMapToken';

// // 覆盖y轴分隔线
// const axisLineType = {
//   axisSplitLineType: cloudBasicToken.lineTypeDashedLG,
// };

// // MapToken覆盖基础数组中坐标轴和刻度的粗组从2改为1
// const axisLineWidth = {
//   axisLineWidth: cloudBasicToken.lineWidthSM,
//   axisTickLineWidth: cloudBasicToken.lineWidthSM,
// };

// // 覆盖里面的文本样式
// const textColor = {
//   colorSubtext: cloudBasicToken.colorGray50,
//   colorInactive: cloudBasicToken.colorGray40,
//   colorActive: cloudBasicToken.colorGray50,
// };


// // 待调整
// const lineColor = {
//   colorAxisPointerLine: cloudBasicToken.colorGray50,
//   colorAxisLine: cloudBasicToken.colorGray20,
//   colorAxisTickLine:  cloudBasicToken.colorGray20,
//   colorAxisSplitLine:cloudBasicToken.colorGray20,
// };

// 获取新的mapToken
const cloudMapToken = {
  ...getMapToken(cloudBasicToken),
  // ...axisLineType,
  // ...axisLineWidth,
  // ...textColor,
  // ...lineColor,
};

export default cloudMapToken;
