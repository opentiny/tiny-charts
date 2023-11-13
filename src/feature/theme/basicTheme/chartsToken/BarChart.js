import basicToken from "../basicToken";
import mapToken from '../mapToken';

const { borderSM, borderRadiusSM, colorGray10, fontSizeSM } = basicToken;
const { colorBorderTP, barWidth } = mapToken;

const BarChart = () => {
  return {
    itemStyle: {
      borderWidth: borderSM,
      borderColor: colorBorderTP,
      borderRadius: borderRadiusSM,
      color: colorBorderTP
    },
    label: {
      color: colorGray10,
      fontSize: fontSizeSM
    },
    barWidth: barWidth
  };
};

export default BarChart;