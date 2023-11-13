
import mapToken from '../mapToken';
import BarChart from './BarChart';
import BubbleChart from './BubbleChart';
import FunnelChart from './FunnelChart';
import GraphTreeChart from './GraphTreeChart';
import HillChart from './HillChart';
import JadeJueChart from './JadeJueChart';

const chartsToken = {
  BarChart: BarChart(),
  BubbleChart: BubbleChart(),
  FunnelChart: FunnelChart(),
  GraphTreeChart: GraphTreeChart(),
  HillChart: HillChart(),
  JadeJueChart: JadeJueChart()
};

export default chartsToken;