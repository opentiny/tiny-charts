import cloudModelToken from './modelToken';
import cloudChartsToken from './chartsToken';
import { colorState, colorGroup } from '../../color/cloud/dark';

const cloudDark = {
  colorGroup,
  colorState,
  ...cloudModelToken,
  ...cloudChartsToken,
};

export default cloudDark;
