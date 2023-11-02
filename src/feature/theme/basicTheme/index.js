import modeleToken from './modelToken';
import chartsToken from './chartsToken';
import basicToken from './basicToken';
import mapToken from './mapToken';
import { colorGroup, colorState } from './basicToken';

const basicTheme = {
  colorGroup,
  colorState,
  ...modeleToken, // 三级
  ...chartsToken, // 四级
};

export default basicTheme;
export { basicToken, mapToken };
