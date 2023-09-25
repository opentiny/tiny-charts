import LineChart from './lineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import AreaChart from './AreaChart';
import RadarChart from './RadarChart';
import HeatMapChart from './HeatMapChart';
import GaugeChart from './GaugeChart';
import JadeJueChart from './JadeJueChart';
import FlowChart from './FlowChart';
import WaveChart from './WaveChart';
import BubbleChart from './BubbleChart';
import ProcessChart from './ProcessChart';
import PolarBarChart from './PolarBarChart';
import SunburstChart from './SunburstChart';
import HillChart from './HillChart';
import CircleProcessChart from './CircleProcessChart';
import BoxplotChart from './BoxplotChart';
import SankeyChart from './SankeyChart';
import FunnelChart from './FunnelChart';
import LiquidfillChart from './LiquidfillChart';
import TreeChart from './TreeChart';
import GraphChart from './GraphChart';
import GraphTreeChart from './GraphTreeChart';
import AssembleBubbleChart from './AssembleBubbleChart';
import WordCloudChart from './WordCloudChart';
import GanttChart from './GanttChart';
import HoneycombChart from './HoneycombChart';
import CandlestickChart from './CandlestickChart';

const ChartList = (theme, shouldRenderArr) => {
  const chartList = [
    // {
    //   name: 'LineChart',
    //   components: (index) => { return <LineChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></LineChart>; }
    // },
    {
      name: 'BarChart',
      components: (index) => { return <BarChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></BarChart>; }
    },
    {
      name: 'PieChart',
      components: (index) => { return <PieChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></PieChart>; },
    },
    {
      name: 'AreaChart',
      components: (index) => { return <AreaChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></AreaChart>; },
    },
    {
      name: 'GaugeChart',
      components: (index) => { return <GaugeChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></GaugeChart>; },
    },
    {
      name: 'RadarChart',
      components: (index) => { return <RadarChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></RadarChart>; },
    },
    {
      name: 'HeatMapChart',
      components: (index) => { return <HeatMapChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></HeatMapChart>; },
    },
    {
      name: 'FlowChart',
      components: (index) => { return <FlowChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></FlowChart>; },
    },
    {
      name: 'JadeJueChart',
      components: (index) => { return <JadeJueChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></JadeJueChart>; },
    },
    {
      name: 'BubbleChart',
      components: (index) => { return <BubbleChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></BubbleChart>; },
    },
    {
      name: 'ProcessChart',
      components: (index) => { return <ProcessChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></ProcessChart>; },
    },
    {
      name: 'PolarBarChart',
      components: (index) => { return <PolarBarChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></PolarBarChart>; },
    },
    {
      name: 'SunburstChart',
      components: (index) => { return <SunburstChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></SunburstChart>; },
    },
    // {
    //   name: 'HillChart',
    //   components: (index) => { return <HillChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></HillChart>; },
    // },
    {
      name: 'CircleProcessChart',
      components: (index) => { return <CircleProcessChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></CircleProcessChart>; },
    },
    {
      name: 'BoxplotChart',
      components: (index) => { return <BoxplotChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></BoxplotChart>; },
    },
    {
      name: 'SankeyChart',
      components: (index) => { return <SankeyChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></SankeyChart>; },
    },
    {
      name: 'FunnelChart',
      components: (index) => { return <FunnelChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></FunnelChart>; },
    },
    {
      name: 'LiquidfillChart',
      components: (index) => { return <LiquidfillChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></LiquidfillChart>; },
    },
    {
      name: 'TreeChart',
      components: (index) => { return <TreeChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></TreeChart>; },
    },
    {
      name: 'GraphChart',
      components: (index) => { return <GraphChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></GraphChart>; },
    },
    {
      name: 'GraphTreeChart',
      components: (index) => { return <GraphTreeChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></GraphTreeChart>; },
    },
    {
      name: 'AssembleBubbleChart',
      components: (index) => { return <AssembleBubbleChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></AssembleBubbleChart>; },
    },
    {
      name: 'WordCloudChart',
      components: (index) => { return <WordCloudChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></WordCloudChart>; },
    },
    {
      name: 'GanttChart',
      components: (index) => { return <GanttChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></GanttChart>; },
    },
    {
      name: 'WaveChart',
      components: (index) => { return <WaveChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></WaveChart>; },
    },
    {
      name: 'HoneycombChart',
      components: (index) => { return <HoneycombChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></HoneycombChart>; },
    },
    {
      name: 'CandlestickChart',
      components: (index) => { return <CandlestickChart theme={theme} shouldRender={shouldRenderArr.includes(index)} ></CandlestickChart>; }
    },
  ];
  return chartList;
};

export default ChartList;