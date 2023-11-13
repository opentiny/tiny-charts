import basicToken from '../basicToken';

const { colorGray0, fontSize, borderSM } = basicToken;


const BubbleChart = () => {
  return {
    emphasis: {
      label: {
        color: colorGray0,
        fontSize: fontSize
      }
    },
    itemStyle: {
      borderWidth: borderSM
    },
    label: {
      fontSize: fontSize
    }
  };
};

export default BubbleChart;