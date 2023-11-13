import basicToken from '../basicToken';

const { lineWidthSM, errorColor, fontSizeSM } = basicToken;

const HillChart = () => {
  return {
    markLine: {
      lineStyle: {
        width: lineWidthSM,
        color: errorColor
      },
      emphasis: {
        lineStyle: {
          width: lineWidthSM
        }
      }
    },
    textStyle: {
      fontSize: fontSizeSM
    }
  };
};

export default HillChart;