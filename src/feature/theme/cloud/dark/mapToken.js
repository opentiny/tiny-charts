import cloudBasicToken from './basicToken';
import getMapToken from '../../util/getMapToken';
// 覆盖y轴分隔线
const axisLineType = {
  axisSplitLineType: cloudBasicToken.lineTypeDashedLG,
};

// MapToken覆盖基础数组中坐标轴和刻度的粗组从2改为1
const axisLineWidth = {
  axisLineWidth: cloudBasicToken.lineWidthSM,
  axisTickLineWidth: cloudBasicToken.lineWidthSM,
};

// 覆盖里面的文本样式
const textColor = {
  colorSubtext: cloudBasicToken.colorGray50,
};

const lineColor = {
  colorAxisPointerLine: cloudBasicToken.colorGray50,
};

// 获取新的mapToken
const cloudMapToken = {
  ...getMapToken(cloudBasicToken),
  ...axisLineType,
  ...axisLineWidth,
  ...textColor,
  ...lineColor,
};

export default cloudMapToken;
