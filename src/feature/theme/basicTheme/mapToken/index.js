import basicToken from '../basicToken';
import getMapToken from '../../util/getMapToken';
import { ictColor } from '../../color';

const basicTheme = {
  ...ictColor,
  ...basicToken,
};

const mapToken = {
  ...getMapToken(basicTheme),
};

export default mapToken;
