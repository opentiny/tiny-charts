/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import GaugeChart from './components/GaugeChart';
import BubbleChart from './components/BubbleChart';
import WordCloudChart from './components/WordCloudChart';
import SankeyChart from './components/SankeyChart';
import HeatMapChart from './components/HeatMapChart';
import ScatterChart from './components/ScatterChart';
import JadeJueChart from './components/JadeJueChart';
import TreeChart from './components/TreeChart';
import TreeMapChart from './components/TreeMapChart';
import HillChart from './components/HillChart';
import GraphTreeChart from './components/GraphTreeChart';
import ProcessChart from './components/ProcessChart';
import PolarBarChart from './components/PolarBarChart';
import CircleProcessChart from './components/CircleProcessChart';
import SunburstChart from './components/SunburstChart';
import FunnelChart from './components/FunnelChart';
import LiquidfillChart from './components/LiquidfillChart';
import BoxplotChart from './components/BoxplotChart';
import RegionChart from './components/RegionChart';
import CandlestickChart from './components/CandlestickChart';
import GraphChart from './components/GraphChart';
import AssembleBubbleChart from './components/AssembleBubbleChart';
import BulletChart from './components/BulletChart';

function Register() {
  this.registeredComp = {};
}

function registerComp(options) {
  this.registeredComp[options.name] = options.component;
}

function getRegisteredComp(name) {
  if (name in this.registeredComp) {
    return this.registeredComp[name];
  }
  return null;
}

Register.prototype.registerComp = registerComp;
Register.prototype.getRegisteredComp = getRegisteredComp;

const register = new Register();

const components = [
  {
    name: 'AreaChart',
    component: LineChart,
  },
  {
    name: 'LineChart',
    component: LineChart,
  },
  {
    name: 'BarChart',
    component: BarChart,
  },
  {
    name: 'PieChart',
    component: PieChart,
  },
  {
    name: 'GaugeChart',
    component: GaugeChart,
  },
  {
    name: 'BubbleChart',
    component: BubbleChart,
  },
  {
    name: 'RadarChart',
    component: RadarChart,
  },
  {
    name: 'WordCloudChart',
    component: WordCloudChart,
  },
  {
    name: 'HeatMapChart',
    component: HeatMapChart,
  },
  {
    name: 'ScatterChart',
    component: ScatterChart,
  },
  {
    name: 'SankeyChart',
    component: SankeyChart,
  },
  {
    name: 'JadeJueChart',
    component: JadeJueChart,
  },
  {
    name: 'TreeChart',
    component: TreeChart,
  },
  {
    name: 'TreeMapChart',
    component: TreeMapChart,
  },
  {
    name: 'HillChart',
    component: HillChart,
  },
  {
    name: 'GraphTreeChart',
    component: GraphTreeChart,
  },
  {
    name: 'ProcessChart',
    component: ProcessChart,
  },
  {
    name: 'PolarBarChart',
    component: PolarBarChart,
  },
  {
    name: 'CircleProcessChart',
    component: CircleProcessChart,
  },
  {
    name: 'SunburstChart',
    component: SunburstChart,
  },
  {
    name: 'FunnelChart',
    component: FunnelChart,
  },
  {
    name: 'LiquidfillChart',
    component: LiquidfillChart,
  },
  {
    name: 'BoxplotChart',
    component: BoxplotChart,
  },
  {
    name: 'RegionChart',
    component: RegionChart,
  },
  {
    name: 'CandlestickChart',
    component: CandlestickChart,
  },
  {
    name: 'GraphChart',
    component: GraphChart,
  },
  {
    name: 'AssembleBubbleChart',
    component: AssembleBubbleChart,
  },
  {
    name: 'BulletChart',
    component: BulletChart,
  },
];

components.forEach(comp => {
  register.registerComp(comp);
});
export default register;
