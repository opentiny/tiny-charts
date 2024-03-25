<template>
  <div class="wrapper">
    <Search :title="title" :placeholder="placeholder" @input="handleInput"></Search>
    <tiny-layout class="charts-wrap">
      <tiny-row>
        <tiny-col :span="4" v-for="item in chartList" @click="handleClick(item.value)">
          <div class="chart-item">
            <div class="chart-title">{{ item.title }}</div>
            <ChartTemplate :chartName="item.value"></ChartTemplate>
          </div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
import { NAV_DATA } from '../menu/menu';
import ChartTemplate from './chart-template.vue';
import Search from '../../main/example/components/search.vue';

const chartsArr = [];
const demoChartArr = ['AreaChart', 'BarChart', 'GaugeChart', 'LineChart', 'PieChart', 'RadarChart'];
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
    Search,
    ChartTemplate,
  },
  data() {
    return {
      title: '图表总览 OverView',
      placeholder: '搜索图表',
      chartList: [],
    };
  },
  created() {
    this.chartList = chartsArr;
  },
  mounted() {},
  methods: {
    handleInput(val) {
      this.chartList = chartsArr.filter(v => {
        return v.title.toLowerCase().includes(val.toLowerCase());
      });
    },
    handleClick(value) {
      window.parent.__ChartRoute__.jumpToChartExample(value);
    },
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  .charts-wrap {
    margin: 0 -0.5rem;
  }
  .tiny-col .chart-item {
    margin-bottom: 2rem;
    height: 22rem;
    border: 1px solid var(--ti-base-color-common-1);
    border-radius: 0.125rem;
    cursor: pointer;
    overflow: hidden;
    background: var(--ti-base-color-bg-2);
    &:hover {
      box-shadow: 0 0 0.6rem 0.1rem #bebebebf;
    }
    .chart-title {
      font-size: 0.875rem;
      font-weight: bold;
      padding: 0 0.625rem;
      height: 2rem;
      line-height: 2rem;
      color: var(--ti-base-color-common-2);
      border-bottom: 1px solid var(--ti-base-color-common-1);
    }
    .chart-container {
      height: 20rem;
    }
  }
}
</style>
