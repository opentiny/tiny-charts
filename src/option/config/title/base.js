import cloneDeep from '../../../util/cloneDeep';
import Theme from '../../../feature/theme';
const baseOption = {
  text: '',
  textStyle: {
    color: undefined,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 12,
  },
  padding: [0, 0, 0, 0],
};

function base() {
  const option = cloneDeep(baseOption);   
  option.textStyle.color =  Theme.color.base.axislabel;
  return option;
}

export default base;
