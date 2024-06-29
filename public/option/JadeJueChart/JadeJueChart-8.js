const option = {
  theme: 'light',
  data: [
    { name: 'cluster-1', value: 9.02 },
    { name: 'cluster-2', value: 8.56 },
    { name: 'cluster-3', value: 7.31 },
    { name: 'cluster-4', value: 5.92 },
    { name: 'cluster-5', value: 5.25 },
  ],
  max: 10.3,
  // 将视图由3/4圆变为整圆
  fill: true,
  // 是否展示柱条两侧圆弧效果
  roundCap: false,
  // 是否展示柱条背景样式
  showBackground: false,
  // 极坐标系-角度轴相关属性配置
  angleAxis: {
    startAngle: 90,
    splitNumber: 11,
    axisLine: {
      show: true,
    },
    splitLine: {
      show: true
    },
    axisTick: {
      show: true
    },
    axisLabel: {
      color: '#999',
      fontSize: 12,
      show: true,
      formatter: 'percent'
    }
  },
  // 极坐标系-径向轴相关属性配置
  radiusAxis: {
    axisLine: {
      show: true
    },
    axisTick: {
      show: true
    },
    axisLabel: {
      interval: 0,
      align: 'right',
      margin: 5,
      color: '#999',
    }
  },
  legend: {
    show: true,
    position: {
      left: '65%',
      bottom: 'center',
    },
    itemWidth: 8,
    itemHeight: 8,
    textStyle: {
      padding: [2, 0, 0, 0],
      rich: {
        a: {
          color: '#000',
          fontSize: 14,
          fontWeight: 'bold'
        },
        b: {
          color: '#939393'
        }
      }
    },
    formatter: (name) => {
      let data = {
        'cluster-1': '9.02核',
        'cluster-2': '8.56核',
        'cluster-3': '7.31核',
        'cluster-4': '5.92核',
        'cluster-5': '5.25核',
      }
      let maxLength = 0
      for (let i = 0; i < Object.keys(data).length; i++) {
        if (Object.values(data)[i].toString().length >= maxLength) {
          maxLength = Object.values(data)[i].toString().length
        }
      }
      const length = data[name].toString().length
      let str = '\t\t\t\t'
      for (let i = 0; i <= maxLength - length; i++) {
        str += '\t\t'
      }
      return '{b|' + name + '}' + str + '{a|' + data[name] + '}'
    },
    orient: 'vertical',
  },
  position: {
    radius: ['10%', '50%'],
    center: ['35%', '50%']
  },
};
