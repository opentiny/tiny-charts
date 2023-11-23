import cloudModelToken from './modelToken';
import cloudChartsToken from './chartsToken';
import { colorState, colorGroup } from '../../color/cloud/light';

const cloudLight = {
  colorGroup,
  colorState,
  ...cloudModelToken,
  ...cloudChartsToken,
};

export default cloudLight;
