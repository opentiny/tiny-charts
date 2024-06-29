[
  {
    theme: 'light',
    legend: {
      show: true,
      orient: 'horizontal',
      position: {
        bottom: 20,
        left: 'center'
      },
    },
    // radarMax 用来设置雷达图最外圈代表的数值
    // 当不设置 radarMax 时，雷达图坐标系的最外圈为数据中的最大值
    radarMax: 100,
    data: {
      Domestic: {
        Equipment: 42,
        VM: 90,
        CSP: 81,
        RD: 53,
        Markets: 77,
      },
    },
  },
  {
    theme: 'light',
    legend: {
      show: true,
      position: {
        bottom: 21,
        left: 'center'
      },
    },
    // radarMax 用来设置雷达图最外圈代表的数值
    // 当不设置 radarMax 时，雷达图坐标系的最外圈为数据中的最大值
    radarMax: 100,
    data: {
      Domestic: {
        Equipment: 45,
        VM: 90,
        CSP: 85,
        RD: 53,
        Markets: 75,
      },
      Abroad: {
        Equipment: 75,
        VM: 55,
        CSP: 93,
        RD: 95,
        Markets: 85,
      },
    },
  },
  {
    theme: 'light',
    color: ['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41', '#00aaee'], // 自定义颜色组，会循环使用该颜色组
    legend: {
      show: true,
      position: {
        left: 'center',
        bottom: 20,
      },
      orient: 'horizontal',
    },
    radarMax: 100,
    data: {
      Domestic: {
        Equipment: 48,
        VM: 90,
        CSP: 88,
        RD: 53,
        Markets: 78
      },
      Abroad: {
        Equipment: 78,
        VM: 55,
        CSP: 98,
        RD: 90,
        Markets: 88
      },
    },
  },
  {
    theme: 'light',
    legend: {
      show: true,
      position: {
        left: 'center',
        bottom: 20,
      },
      orient: 'horizontal',
    },
    markLine: 81,
    data: {
      Domestic: {
        Equipment: 47,
        VM: 90,
        CSP: 80,
        RD: 57,
        Markets: 77,
      },
      Abroad: {
        Equipment: 77,
        VM: 55,
        CSP: 93,
        RD: 97,
        Markets: 87,
      },
    },
  },
];
