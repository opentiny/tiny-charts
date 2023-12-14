import basicToken from './basicToken';
import modelToken from './modelToken';
import chartsToken from './chartsToken';
import { colorState, colorGroup } from '../../color/bpit/light';
// import { getMapToken } from './mapToken';

const bpitLight = {
  colorGroup,
  colorState,
  ...modelToken,
  ...chartsToken,
};

export default bpitLight;
export {
  basicToken as bpitLightBasicToken,
  //  getMapToken as getBpitLightMapToken
};
