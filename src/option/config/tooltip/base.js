import cloneDeep from '../../../util/cloneDeep';
import Theme from '../../../feature/theme'
const baseOption = {
  trigger: 'axis',
  confine: true,
  axisPointer: {
    z: 0,
    type: 'line',
    lineStyle: {
      type: 'solid',
      width: 1,
      color: undefined,
    },
    shadowStyle: {
      color: undefined,
    },
  },
  textStyle: {
    color: undefined,
    fontSize: 14,
  },
  borderWidth: 0,
  padding: [14, 16],
  backgroundColor: undefined,
  formatter: undefined,
};

function base(theme) {
  const option = cloneDeep(baseOption);
  const colorBase =Theme.color.base
  option.axisPointer.lineStyle.color = colorBase.subfont;
  option.axisPointer.shadowStyle.color = colorBase.subg;
  option.backgroundColor = colorBase.bg;
  option.textStyle.color = colorBase.font;
  return option;
}

export default base;
