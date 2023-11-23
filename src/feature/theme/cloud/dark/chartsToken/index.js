import BarChart from './BarChart';
import BubbleChart from './BubbleChart';
import FunnelChart from './FunnelChart';
import GraphTreeChart from './GraphTreeChart';
import HillChart from './HillChart';
import JadeJueChart from './JadeJueChart';
import TreeChart from './TreeChart';
import SunburstChart from './SunburstChart';
import SankeyChart from './SankeyChart';
import RadarChart from './RadarChart';
import ProcessChart from './ProcessChart';
import PolarBarChart from './PolarBarChart';
import PieChart from './PieChart';
import AreaChart from './AreaChart';
import LineChart from './LineChart';
import basicToken from '../basicToken';
import mapToken from '../mapToken';
const getChartsToken = () => {
  return {
    BarChart: BarChart(basicToken, mapToken),
    BubbleChart: BubbleChart(basicToken, mapToken),
    FunnelChart: FunnelChart(basicToken, mapToken),
    GraphTreeChart: GraphTreeChart(basicToken, mapToken),
    HillChart: HillChart(basicToken, mapToken),
    JadeJueChart: JadeJueChart(basicToken, mapToken),
    TreeChart: TreeChart(basicToken, mapToken),
    SunburstChart: SunburstChart(basicToken, mapToken),
    SankeyChart: SankeyChart(basicToken, mapToken),
    RadarChart: RadarChart(basicToken, mapToken),
    ProcessChart: ProcessChart(basicToken, mapToken),
    PolarBarChart: PolarBarChart(basicToken, mapToken),
    PieChart: PieChart(basicToken, mapToken),
    AreaChart: AreaChart(basicToken, mapToken),
    LineChart: LineChart(basicToken, mapToken),
  };
};

const cloudChartsToken = {
  ...getChartsToken(),
};

export default cloudChartsToken;
