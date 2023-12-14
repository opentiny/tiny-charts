import basicToken from './basicToken';
import modelToken from './modelToken';
import chartsToken from './chartsToken';
import { colorState, colorGroup } from '../../color/cloud/dark';

const cloudDark = {
  colorGroup,
  colorState,
  ...modelToken,
  ...chartsToken,
};

export default cloudDark;
export { basicToken as cloudDarkBasicToken };
