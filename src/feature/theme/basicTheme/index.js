import modeleToken from './modelToken';
import chartsToken from './chartsToken';
import basicToken from './basicToken';
import { colorGroup, colorState } from '../color/ictColor';

const basicTheme = {
  colorGroup,
  colorState,
  ...modeleToken, // 三级
  ...chartsToken, // 四级
};

export default basicTheme;
export { basicToken };
