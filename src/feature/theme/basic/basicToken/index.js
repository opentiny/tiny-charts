import border from './border';
import font from './font';
import line from './line';
import space from './space';

const basicToken = {
  ...font,
  ...line,
  ...space,
  ...border,
};

export default basicToken;



