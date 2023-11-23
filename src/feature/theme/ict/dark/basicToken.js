import { basicToken } from '../../basic';
import ictDark from '../../color/ict/dark';

// 覆盖基础的色值
const ictBasicToken = {
  ...basicToken,
  ...ictDark,
};

export default ictBasicToken;
