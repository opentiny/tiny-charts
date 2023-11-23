import basicToken from '../basicToken';
import ictLight from '../../color/ict/light';
import getMapToken from '../../ict/getMapToken';

const basicTheme = {
  ...ictLight,
  ...basicToken,
};

const mapToken = {
  ...getMapToken(basicTheme),
};

export default mapToken;
