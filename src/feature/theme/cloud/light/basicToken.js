import { basicToken } from '../../basic';
import cloudLight from '../../color/cloud/light';
// 覆盖基础的色值
const cloudBasicToken = {
  ...basicToken,
  ...cloudLight,
};

export default cloudBasicToken;
