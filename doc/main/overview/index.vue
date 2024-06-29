<template>
  <div class="overview ic-example-list">
    <div class="ic-example-list-title">
      图表总览 OverView
    </div>
    <tiny-layout class="charts-wrap">
      <tiny-row>
        <tiny-col :span="4" v-for="(item, index) in chartList" :key="index" @click="handleClick(item.value)"
          class="overview-item">
          <div class="chart-item">
            <div class="chart-title">{{ item.title }}</div>
            <ChartTemplate :chart-name="item.value"></ChartTemplate>
          </div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
import { NAV_DATA } from '../menu/menu';
import ChartTemplate from './chart-template.vue';
import { Layout, Row, Col } from '@opentiny/vue'

const chartsArr = [];
const demoChartArr = [
  'LineChart',
  'BarChart',
  'PieChart',
  'AreaChart',
  'RadarChart',
  'GaugeChart',
  'AssembleBubbleChart',
  'LiquidfillChart',
  'WordCloudChart',
  'WaveChart',
  'FlowChart',
  'HillChart',
  'ProcessChart',
  'CircleProcessChart',
  'BubbleChart',
  'PolarBarChart',
  'SunburstChart',
  'JadeJueChart',
  'SankeyChart',
  'FunnelChart',
  'HeatMapChart'
];

NAV_DATA.forEach(v => {
  if (v.value && v.value.includes('Chart')) {
    // 先只渲染六个图表，后续渲染全部
    if (demoChartArr.includes(v.value)) {
      chartsArr.push(v);
    }
  }
});
export default {
  components: {
    ChartTemplate,
    TinyLayout: Layout,
    TinyCol: Col,
    TinyRow: Row
  },
  data() {
    return {
      title: '图表总览 OverView',
      chartList: [],
      currentTheme: 'hdesign-light'
    };
  },
  created() {
    chartsArr.sort((star, next) => {
      return demoChartArr.indexOf(star.value) - demoChartArr.indexOf(next.value);
    });
    this.chartList = chartsArr;
  },
  methods: {
    handleClick(value) {
      window.parent.__ChartRoute__.jumpToChartExample(value);
    }
  }
};
</script>