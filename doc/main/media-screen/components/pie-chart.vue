<template>
  <div className="chart-container">
    <tiny-form label-width="128px" label-position="left">
      <tiny-form-item label="切换图表容器尺寸">
        <tiny-select v-model="value" @change="selectChange">
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
            :icon="item.icon">
          </tiny-option>
        </tiny-select>
      </tiny-form-item>
    </tiny-form>
    <div class='chart' ref="chartContainer" style="height: 400px" :style="{ height: '400px', width: chartWidth }">
    </div>
  </div>
</template>

<script>
import IntegrateChart from '../../../../src/index';
import { Form, FormItem, Select, Option } from '@opentiny/vue'

// 圆盘图的配置
let pieChartOpt = {
  title: {
    text: '259',
    subtext: '用户数',
    left: '29.7%',
    textAlign: 'center',
  },
  position: {
    center: ['30%', '50%'],
    radius: ['40%', '46%'],
  },
  legend: {
    show: true,
    position: {
      right: '20%',
      top: 'center'
    },
    orient: 'vertical',
    formatter: (name) => {
      let data = [
        { value: 100, name: 'VPC' },
        { value: 90, name: 'IM' },
        { value: 49, name: 'EIP' },
        { value: 14, name: 'SG' },
      ];
      let total = data.reduce((a, b) => {
        return a + b.value;
      }, 0);
      let item = data.filter((item) => item.name === name)[0];
      return "{title|" + name + "}{value|" + item.value + "}{split||}{value|" + total + "}";
    },
    textStyle: {
      rich: {
        title: {
          fontSize: 14,
          padding: [0, 0, 0, 5],
          width: 80,
        },
        value: {
          fontSize: 12,
          width: 20,
          fontWeight: 'bold',
        },
        split: {
          padding: [0, 8, 0, 8]
        }
      },
    }
  },
  label: {
    show: true,
    type: 'percent',
    line: false
  },
  data: [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
    { value: 49, name: 'EIP' },
    { value: 14, name: 'SG' },
  ]
};

// 圆盘图的响应式配置
let pieMediaOption = [
  {
    minWidth: 1001,
    option: {
      label: {
        line: true
      },
      title: {
        textStyle: {
          fontSize: 45,
        },
      },
      position: {
        radius: ['55%', '65%'],
      },
    }
  },
  {
    maxWidth: 1000,
    minWidth: 801,
    option: {
      label: {
        distance: 8
      },
      title: {
        left: '29.5%',
        textStyle: {
          fontSize: 30,
        },
      },
    }
  },
  {
    maxWidth: 800,
    minWidth: 601,
    option: {
      position: {
        radius: ['35%', '42%'],
      },
      title: {
        subtext: '',
        left: '29.4%',
      },
      label: {
        show: false
      }
    }
  },
  {
    maxWidth: 600,
    minWidth: 401,
    option: {
      legend: {
        top: 320,
        itemGap: 40,
        show: true,
        formatter: '',
        left: 'center',
        orient: 'horizontal'
      },
      position: {
        center: ['50%', '50%'],
        radius: ['30%', '37%']
      },
      title: {
        left: '49.1%',
        subtext: '',
        textStyle: {
          fontSize: 20,
        },
      },
      label: {
        show: false
      }
    }
  },
  {
    maxWidth: 400,
    option: {
      position: {
        center: ['50%', '50%'],
        radius: ['25%', '32%']
      },
      title: {
        show: false
      },
      label: {
        show: false
      },
      legend: {
        show: false
      }
    }
  }
];

export default {
  name: 'PieChart',
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      value: 0,
      chartWidth: '1400px',
      options: [
        { label: '1400px', value: 0 },
        { label: '1000px', value: 1 },
        { label: '800px', value: 2 },
        { label: '600px', value: 3 },
        { label: '400px', value: 4 },
      ],
      currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
    }
  },
  created() {
    this.integrateChart = new IntegrateChart();
  },
  mounted() {
    this.renderChart();
    this.$bus.on('themeChange', (val) => {
      this.currentTheme = val;
      this.renderChart();
    })
  },
  methods: {
    selectChange(val) {
      this.value = val;
      this.chartWidth = this.options[val].label;
      this.$refs.chartContainer.style.opacity = 0;
      setTimeout(() => {
        this.$refs.chartContainer.style.opacity = 1;
      }, 20)
    },
    renderChart() {
      this.integrateChart.init(this.$refs.chartContainer);
      this.integrateChart.mediaScreen(this.$refs.chartContainer, pieMediaOption);
      pieChartOpt.theme = this.currentTheme;
      this.integrateChart.setSimpleOption('PieChart', pieChartOpt, {});
      this.integrateChart.render();
    }
  }
}
</script>