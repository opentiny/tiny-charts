import { basicToken } from '../../basicTheme';
import { cloudColor } from '../../color';
// 覆盖基础的色值
const cloudBasicToken = {
  ...basicToken,
  ...cloudColor,
};

export default cloudBasicToken;
