<template>
  <div className="chart-container">
    <div style="display: flex;justify-content: space-between; width: 100%;">
      <div class="iii">左侧图表容器尺寸：{{ leftChartWidth }}</div>
      <div class="222">右侧图表容器尺寸：{{ rightChartWidth }}</div>

    </div>
    <tiny-split v-model="splitValue" style="height: 400px;" @moving="moving" id="firstSplit" :left-top-min="fatherWidth*0.33+'px'"
      :right-bottom-min="fatherWidth*0.33+'px'">
      <template #left>
        <div class='chart' ref="leftChartContainer" style="height: 400px"
          :style="{ height: '400px', width: leftChartWidth }">
        </div>
      </template>
      <template #right>
        <div class='chart' ref="rightChartContainer" style="height: 400px"
          :style="{ height: '400px', width: rightChartWidth }">
        </div>
      </template>
    </tiny-split>

  </div>
</template>

<script>
import IntegrateChart from '../../../../src/index';
import { Form, FormItem, Select, Option, Split } from '@opentiny/vue'

// 柱状图的配置
const barChartOpt = {
  theme: 'cloud-light',
  padding: [50, 70, 30, 30],
  data: [
    { "Month": '一月份', "Domestic": 33, "Abroad": 37 },
    { "Month": '二月份', "Domestic": 27, "Abroad": 39 },
    { "Month": '三月份', "Domestic": 31, "Abroad": 20 },
    { "Month": '四月份', "Domestic": 30, "Abroad": 15 },
    { "Month": '五月份', "Domestic": 37, "Abroad": 13 },
    { "Month": '六月份', "Domestic": 36, "Abroad": 17 },
    { "Month": '七月份', "Domestic": 42, "Abroad": 22 },
    { "Month": '八月份', "Domestic": 22, "Abroad": 12 },
    { "Month": '九月份', "Domestic": 17, "Abroad": 30 },
    { "Month": '十月份', "Domestic": 40, "Abroad": 33 },
    { "Month": '十一月份', "Domestic": 42, "Abroad": 22 },
    { "Month": '十二月份', "Domestic": 32, "Abroad": 11 }
  ],
  xAxis: {
    key: 'Month',
    name: '月份'
  },
  yAxis: {
    name: '百分比(%)',
  },
  legend: {
    show: true,
    position: {
      top: 15,
      right: 25
    }
  }
};

// 柱状图的响应式配置
const barMediaOption = [
  {
    minWidth: 1001,
    option: {
      itemStyle: {
        barWidth: 16,
      },
      label: {
        show: true,
        position: "top"
      }
    }
  }, {
    maxWidth: 1000,
    minWidth: 801,
    option: {
      itemStyle: {
        barWidth: 12,
      },
      label: {
        show: true,
        position: "top"
      }
    }
  }, {
    maxWidth: 800,
    minWidth: 601,
    option: {
      xAxis: {
        interval: 1,
      }
    }
  }, {
    maxWidth: 600,
    minWidth: 401,
    option: {
      xAxis: {
        interval: 1,
        name: ''
      },
      itemStyle: {
        barWidth: 6,
      },
      legend: {
        show: false
      }
    }
  }, {
    maxWidth: 400,
    option: {
      xAxis: {
        name: '',
        interval: 1
      },
      itemStyle: {
        barWidth: 4,
      },
      yAxis: {
        name: '',
        show: false
      },
      legend: {
        show: false
      }
    }
  }
];

export default {
  name: 'BarChart',
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinySelect: Select,
    TinyOption: Option,
    TinySplit: Split,
  },
  data() {
    return {
      value: 0,
      leftChartWidth: 0,
      rightChartWidth: 0,
      options: [
        { label: '1400px', value: 0 },
        { label: '1000px', value: 1 },
        { label: '800px', value: 2 },
        { label: '600px', value: 3 },
        { label: '400px', value: 4 },
      ],
      currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
      splitValue: 0.5,
      fatherWidth: 0,
    }
  },
  created() {
    this.integrateChart1 = new IntegrateChart();
    this.integrateChart2 = new IntegrateChart();
  },
  mounted() {
    new Promise((reslove, reject) => {
      this.fatherWidth = document.querySelector("#firstSplit").getBoundingClientRect().width
      this.leftChartWidth = Math.floor(this.fatherWidth / 2)+'px'
      this.rightChartWidth = Math.floor(this.fatherWidth / 2)+'px'
      reslove()
    }).then(() => {
      this.renderChart();
      this.$bus.on('themeChange', (val) => {
        this.currentTheme = val;
        this.renderChart();
      })
    })
  },
  methods: {
    moving() {
      let threshold = Math.max(0.333, Math.min(0.667, this.splitValue))
      let fatherWidth = Number(this.fatherWidth)
      let leftWidth = Math.floor(fatherWidth * threshold)
      let rightWidth = Math.floor(fatherWidth * (1 - threshold))
      this.$refs.leftChartContainer.style.width = leftWidth + 'px'
      this.leftChartWidth = leftWidth + 'px'
      this.$refs.rightChartContainer.style.width = rightWidth + 'px'
      this.rightChartWidth = rightWidth + 'px'
    },
    selectChange(val) {
      this.value = val;
      this.leftChartWidth = this.options[val].label;
      this.$refs.leftChartContainer.style.opacity = 0;
      setTimeout(() => {
        this.$refs.leftChartContainer.style.opacity = 1;
      }, 20)
    },
    renderChart() {
      barChartOpt.theme = this.currentTheme;
      this.integrateChart1.init(this.$refs.leftChartContainer);
      this.integrateChart1.mediaScreen(this.$refs.leftChartContainer, barMediaOption);
      this.integrateChart1.setSimpleOption('BarChart', barChartOpt, {});
      this.integrateChart1.render();
      this.integrateChart2.init(this.$refs.rightChartContainer);
      this.integrateChart2.mediaScreen(this.$refs.rightChartContainer, barMediaOption);
      this.integrateChart2.setSimpleOption('BarChart', barChartOpt, {});
      this.integrateChart2.render();

    }
  }
}
</script>