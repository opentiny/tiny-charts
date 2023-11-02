import basicToken from '../../basicTheme/basicToken';
import getMapToken from '../../util/getMapToken';
import color from './color';
import getModelToken from '../../util/getModelToken'


// 覆盖基础的色值
const cloudBasicToken = {
  ...basicToken,
  ...color,
};

// 覆盖y轴分隔线
const axisLineType = {
  axisSplitLineType: cloudBasicToken.lineTypeDashedLG,
};

// MapToken覆盖基础数组中坐标轴和刻度的粗组从2改为1
const axisLineWidth = {
  axisLineWidth: cloudBasicToken.lineWidthSM,
  axisTickLineWidth: cloudBasicToken.lineWidthSM,
};

// 获取新的mapToken
const cloudMapToken = {
  ...getMapToken(cloudBasicToken),
  ...axisLineType,
  ...axisLineWidth,
};

const cloudModelToken = {
  ...getModelToken(cloudMapToken),
};

const cloudChartToken = {};

const cloudLight = {
  colorGroup: cloudBasicToken.colorGroup,
  colorState: cloudBasicToken.colorState,
  ...cloudModelToken,
  ...cloudChartToken,
};

export default cloudLight;
