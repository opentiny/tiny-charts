```javascript

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
          color: "#808080",
          fontSize: 14,
          padding: [0, 0, 0, 5],
          width: 80,
        },
        value: {
          fontSize: 12,
          width: 20,
          color: "#191919",
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
  ...,
  created(){
    this.integrateChart = new IntegrateChart();
  },
  mounted(){
    this.integrateChart.init(this.$refs.chartContainer);
    this.integrateChart.mediaScreen(this.$refs.chartContainer, pieMediaOption);
    this.integrateChart.setSimpleOption('PieChart', pieChartOpt, {});
  }
}
</script>
```