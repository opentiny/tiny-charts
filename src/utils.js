import * as echarts from 'echarts';
import getTooltipContentHtmlStr from "./option/config/tooltip/formatter";

const util = {
  tooltip: {
    formatter: getTooltipContentHtmlStr
  },
  echarts,
  format: {
    truncateText: echarts.format.truncateText
  }
}
export default util