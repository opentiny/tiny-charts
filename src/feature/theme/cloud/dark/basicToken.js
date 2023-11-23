import { basicToken } from '../../basic';
import cloudDark from '../../color/cloud/dark';

// 覆盖基础的色值
const cloudBasicToken = {
  ...basicToken,
  ...cloudDark,
};

export default cloudBasicToken;
