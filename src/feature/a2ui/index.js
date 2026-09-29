import merge from "../../util/merge";
import defBarOption from "./barChart";
import defLineOption from "./lineChart";
import defGaugeOption from "./gaugeChart";
import defProcessOption from "./processChart";
import defRadarOption from "./radarChart";
import defPieOption from "./pieChart";

import defAssembleBubbleOption from "./assembleBubbleChart";
import defBubbleOption from "./bubbleChart";
import defBulletOption from "./bulletChart";
import defFunnelOption from "./funnelChart";
import defHillOption from "./hillChart";
import defJadeJueOption from "./jadeJueChart";
import defScatterOption from "./scatterChart";
import defCircleProcessChartOption from "./circleProcessChart";
import defBarLineOption from "./barLineChart";
import defHeatMapOption from "./heatMapChart";
import defSankeyOption from "./sankeyChart";
import defTreeMapOption from "./treeMapChart"; 

function setMiniChart(iChartOption, that){
  const { chartName } = that
  let { dataZoom, data } = iChartOption;
  let domRect = that.dom.getBoundingClientRect();
  if (['LineChart', 'BarChart'].includes(chartName) && domRect.height < 60) {
    iChartOption.mini = true;
    if(dataZoom){
      dataZoom.left = 10;
    } else {
      dataZoom = {
        left: 0
      }
    }
    iChartOption.legend.show = false;
    
  } else if( ['PieChart', 'RadarChart', 'GaugeChart' ].includes(chartName)  && domRect.width < 200 || domRect.height < 120 ){
    iChartOption.mini = true;
    iChartOption.position = {
      center: ['50%', '50%'],
      radius: '75%'
    }
    iChartOption.tooltip = {
      show: false
    }
  } else if( chartName === 'ProcessChart' && domRect.height < data.length * 38){
    iChartOption.mini = true;
    iChartOption.legend.show = false;
  } else if( chartName === 'CircleProcessChart' && domRect.width < 80 || domRect.height < 80){
    iChartOption.mini = true;
    iChartOption.position = {
      center: ['50%', '50%'],
      radius: '75%'
    }
    iChartOption.tooltip = {
      show: false
    }
  } else {
    iChartOption.mini = false;
    if (!['ProcessChart', 'GaugeChart','CircleProcessChart'].includes(chartName) && iChartOption.legend) {
      iChartOption.legend.show = true;
    }
    if(dataZoom){
      delete dataZoom.left
    } 
  }
}

function setA2ui(iChartOption, that){
  const { chartName } = that;

  const defaultOption = {
    get LineChart() { return defLineOption(iChartOption) },
    get BarChart() { return defBarOption(iChartOption) },
    get GaugeChart() { return defGaugeOption(iChartOption) },
    get RadarChart() { return defRadarOption(iChartOption) },
    get ProcessChart() { return defProcessOption(iChartOption) },
    get PieChart() { return defPieOption(iChartOption) },
    get AssembleBubbleChart() { return defAssembleBubbleOption(iChartOption) },
    get BubbleChart() { return defBubbleOption(iChartOption) },
    get BulletChart() { return defBulletOption(iChartOption) },
    get FunnelChart() { return defFunnelOption(iChartOption) },
    get HillChart() { return defHillOption(iChartOption) },
    get JadeJueChart() { return defJadeJueOption(iChartOption) },
    get ScatterChart() { return defScatterOption(iChartOption) },
    get CircleProcessChart() { return defCircleProcessChartOption(iChartOption) },
    get BarLineChart() { return defBarLineOption(iChartOption) },
    get HeatMapChart() { return defHeatMapOption(iChartOption) },
    get SankeyChart() { return defSankeyOption(iChartOption) },
    get TreeMapChart() { return defTreeMapOption(iChartOption) }
  }

  merge(iChartOption, defaultOption[chartName])

  // 判断是否使用mini图表

  setMiniChart(iChartOption, that);
}

export default setA2ui;
