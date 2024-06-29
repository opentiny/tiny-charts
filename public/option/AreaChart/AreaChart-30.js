const option = {
  legend: {
    show: true,
    position: {
      right: '5%',
      top: '3%'
    },
    itemWidth: 12,
    itemHeight: 12
  },
  xAxis: [
    {
      gridIndex: 0,
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 12
      },
      keyName: 'Time'
    },
    {
      gridIndex: 1,
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      gridIndex: 0,
      interval:30,
      max:150
    },
    {
      gridIndex: 1,
      inverse: true,
      max:150
    }
  ],
  grid: [
    {
      top: '6%',
      left: 50,
      right: 50,
      height: '42%',
      containLabel: false
    },
    {
      bottom: '6%',
      left: 50,
      right: 50,
      height: '42%',
      containLabel: false
    }
  ],
  data: [
    { 'Time': '00:00', '上行': 33, '下行': 37 },
    { 'Time': '01:00', '上行': 27, '下行': 39 },
    { 'Time': '02:00', '上行': 31, '下行': 20 },
    { 'Time': '03:00', '上行': 30, '下行': 15 },
    { 'Time': '04:00', '上行': 37, '下行': 13 },
    { 'Time': '05:00', '上行': 36, '下行': 17 },
    { 'Time': '06:00', '上行': 42, '下行': 22 },
    { 'Time': '07:00', '上行': 22, '下行': 12 },
    { 'Time': '08:00', '上行': 17, '下行': 30 },
    { 'Time': '09:00', '上行': 40, '下行': 33 },
    { 'Time': '10:00', '上行': 42, '下行': 22 },
    { 'Time': '11:00', '上行': 32, '下行': 11 },
    { 'Time': '12:00', '上行': 52, '下行': 102 },
    { 'Time': '13:00', '上行': 42, '下行': 76 },
    { 'Time': '14:00', '上行': 85, '下行': 19 },
    { 'Time': '15:00', '上行': 27, '下行': 30 },
    { 'Time': '16:00', '上行': 132,'下行': 111 },
    { 'Time': '17:00', '上行': 32, '下行': 120 },
    { 'Time': '18:00', '上行': 55, '下行': 61 },
    { 'Time': '19:00', '上行': 72, '下行': 55 },
    { 'Time': '20:00', '上行': 43, '下行': 89 },
    { 'Time': '21:00', '上行': 51, '下行': 77 },
    { 'Time': '22:00', '上行': 86, '下行': 34 },
    { 'Time': '23:00', '上行': 62, '下行': 11 },
    { 'Time': '24:00', '上行': 32, '下行': 52 },
  ],
  series: [
    {
      xAxisIndex: 0,
      yAxisIndex: 0,
      name: '上行',
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 1,
          x2: 0, y2: 0,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(109,143,240,0)'
            },
            {
              offset: 1,
              color: 'rgba(109,143,240,1)'
            }
          ]
        }
      }
    },
    {
      xAxisIndex: 1,
      yAxisIndex: 1,
      name: '下行',
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0,
          x2: 0, y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(0,168,116,0)'
            },
            {
              offset: 1,
              color: 'rgba(0,168,116,1)'
            }
          ]
        }
      }
    }
  ]
}