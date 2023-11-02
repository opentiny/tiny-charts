import border from './border';
import borderRadius from './borderRadius';
import color from './color'
import font from './font';
import line from './line';
import space from './space';
import { colorGroup, colorState} from './color'
const basicToken = {
  ...border,
  ...borderRadius,
  ...color,
  ...font,
  ...line,
  ...space,
};
export default basicToken;
export { colorGroup, colorState}


