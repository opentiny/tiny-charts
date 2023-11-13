import mapToken from "../mapToken";
import basicToken from "../basicToken";

const { barWidth } = mapToken;
const { border } = basicToken;

const JadeJueChart = () => {
  return {
    barWidth: barWidth,
    itemStyle: {
      borderWidth: border
    }
  };
};
export default JadeJueChart;