import xkey from '../xAxis/xkey';
import ldata from './ldata';
import { updateLegendOccupancy, setMobileLegend } from './calculate';
import { isArray } from '../../../util/type';
import mobile from '../../../util/mobile';
import createSvgLegend from '../../../feature/svgLegend';

export default function legendAdaptive(iChartOption, legend, echartsIns, chartName){
  if (!legend) return legend;
  const isCloudOrHDesign = iChartOption.theme?.includes('cloud') || iChartOption.theme?.includes('hdesign');
  // 图例设置超长滚动 cloud主题，增加宽度设定
  if (legend.type === 'scroll' && isCloudOrHDesign && iChartOption.adaptive) {
    const chartWidth = echartsIns?.getWidth?.() || echartsIns?.getDom?.()?.clientWidth || echartsIns?._dom?.clientWidth || 0;
    let padding = iChartOption.padding;
    let legendWidth = chartWidth - padding[1] - (padding[3] || padding[1]);
    legend.width = legendWidth
  }
  // svg 图例
  if (iChartOption.legend.svg) {
    const cartesianAxisCharts = ['BarChart', 'LineChart', 'BarLineChart', 'LineChart', 'BulletChart', 'CandlestickChart'];
    const dataArr = isArray(iChartOption.data) ? iChartOption.data : [];
    const xAxisKey = xkey(iChartOption);
    const lData = ldata(dataArr, xAxisKey) || [];
    const key = isArray(lData) ? lData[0] : undefined;
    let legendData = legend.data ||  key ? dataArr.map((item) => item?.[key]) || [] : [];
    if (cartesianAxisCharts.includes(chartName)){
      legendData = legend.data || lData;
    }
    createSvgLegend(legend, legendData, echartsIns, iChartOption)
  }
  // 开启图例自适应的图表
  const isMobile = iChartOption.isMobile || mobile();
  const legendAdaptiveCharts = ['PieChart', 'PolarBarChart', 'JadeJueChart',"CircleProcessChart"]; 
  const keyIsNameCharts = ['PolarBarChart', 'JadeJueChart']; 
  if(isMobile && legendAdaptiveCharts.includes(chartName)){
    legend.orient = 'vertical'
  }
  if (echartsIns && legendAdaptiveCharts.includes(chartName) && isCloudOrHDesign && iChartOption.adaptive && legend.orient === 'vertical'){
    const dataArr = isArray(iChartOption.data) ? iChartOption.data : [];
    const xAxisKey = xkey(iChartOption);
    const lData = ldata(dataArr, xAxisKey) || [];
    let key = 'name';
    const legendData = legend.data || key ? dataArr.map((item) => item?.[key]) || [] : [];
    if (isMobile) {
      setMobileLegend(iChartOption, legend, legendData, echartsIns);
    }else{
      updateLegendOccupancy(iChartOption, legend, legendData, echartsIns);
    }
  }
  return legend;

}