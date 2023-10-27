import cloneDeep from '../../../util/cloneDeep';
import Theme from '../../../feature/theme'
const baseTitle = {
  text: '',
  subtext: '',
  top: 'center',
  left: 'center',
  itemGap: 8,
  textStyle: {
    color: undefined,
    fontSize: 28,
    lineHeight: 28,
    fontWeight: 'normal',
  },
  subtextStyle: {
    color: undefined,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'normal',
  },
};

function base(theme) {
  const titleOption = cloneDeep(baseTitle);
  const colorBase = Theme.color.base 
  titleOption.textStyle.color = colorBase.font;
  titleOption.subtextStyle.color = colorBase.subfont;
  return titleOption;
}

export default base;
