import basic from '../../basic';
import light from '../../color/ict/light';

// 覆盖基础的色值
const basicToken = {
  ...basic,
  ...light,
};

export default basicToken;
