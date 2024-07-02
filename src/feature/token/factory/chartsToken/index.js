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
import BarChart from './BarChart';
import BubbleChart from './BubbleChart';
import FunnelChart from './FunnelChart';
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
import AssembleBubbleChart from './AssembleBubbleChart';
import BoxplotChart from './BoxplotChart';
import CandlestickChart from './CandlestickChart';
import CircleProcessChart from './CircleProcessChart';
import GaugeChart from './GaugeChart';
import HeatMapChart from './HeatMapChart';
import ScatterChart from './ScatterChart';
import LiquidfillChart from './LiquidfillChart';
import RegionChart from './RegionChart';
import WaveChart from './WaveChart';
import WordCloudChart from './WordCloudChart';
import TimelineChart from './TimelineChart';
import ChartCard from './ChartCard'
import BulletChart from './BulletChart'

// 本文件getChartsToken的图表键名的增删请同步更改constants中的TOKENCHARTNAMES
/**
 * 根据aliasToken获取chartsToken
 * @param {object} aliasToken
 */
function getChartsToken(aliasToken) {
  return {
    AssembleBubbleChart: AssembleBubbleChart(aliasToken),
    BarChart: BarChart(aliasToken),
    BoxplotChart: BoxplotChart(aliasToken),
    BubbleChart: BubbleChart(aliasToken),
    CandlestickChart: CandlestickChart(aliasToken),
    CircleProcessChart: CircleProcessChart(aliasToken),
    FunnelChart: FunnelChart(aliasToken),
    GaugeChart: GaugeChart(aliasToken),
    HeatMapChart: HeatMapChart(aliasToken),
    ScatterChart: ScatterChart(aliasToken),
    HillChart: HillChart(aliasToken),
    BulletChart:BulletChart(aliasToken),
    JadeJueChart: JadeJueChart(aliasToken),
    LineChart: LineChart(aliasToken),
    AreaChart: AreaChart(aliasToken),
    LiquidfillChart: LiquidfillChart(aliasToken),
    PieChart: PieChart(aliasToken),
    PolarBarChart: PolarBarChart(aliasToken),
    ProcessChart: ProcessChart(aliasToken),
    RadarChart: RadarChart(aliasToken),
    RegionChart: RegionChart(aliasToken),
    SankeyChart: SankeyChart(aliasToken),
    SunburstChart: SunburstChart(aliasToken),
    TreeChart: TreeChart(aliasToken),
    WaveChart: WaveChart(aliasToken),
    WordCloudChart: WordCloudChart(aliasToken),
    TimelineChart: TimelineChart(aliasToken),
    ChartCard:ChartCard(aliasToken)
  };
}

export default getChartsToken;
