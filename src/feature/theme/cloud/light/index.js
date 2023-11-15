

import cloudModelToken from './modelToken'
import cloudChartsToken from './chartsToken'
import { colorState, colorGroup } from '../../color/cloudColor';

const cloudLight = {
  colorGroup,
  colorState,
  ...cloudModelToken,
  ...cloudChartsToken,
};


export default cloudLight;
