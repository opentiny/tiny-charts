const option = {
  theme: 'hdesign-light',
  color: ['#2070F3'],
  position: {
    center: ['50%', '50%'],
    radius: '46%'
  },
  markLine: {
    value: 80,
    color: '#09AA71'
  },
  max: 100,
  data: [
    {
      name: '问题IP',
      value: 65,
    }
  ],
  itemStyle: {
    borderRadius: '50%'
  },
  legend: {
    show: false,
  },
  tooltip: {
    show: true,
    formatter: (params, ticket, callback) => {
        const seriesName = params.seriesName;
        const color = params.color;
        const value = params.value;
        const htmlString = `<div>
                            <span style="display:inline-block;width:10px;height:10px;margin-right:8px;
                            border-radius:5px;border-style: solid;border-width:1px;
                            border-color:${color};background-color:${color};"></span>
                            <span style="margin-right:16px">${seriesName}</span>
                            <span>${value}%</span>
                       </div>`;
        return htmlString;
    }
  },
  title: {
    text: '{value|65}{unit|%}',
    subtext: '问题IP',
    itemGap: -18,
    textStyle: {
      fontWeight: 'bold',
      rich: {
        value: {
          padding: [-20, 0, 0, 0],
          fontSize: 60
        },
        unit: {
          fontSize: 16,
          fontWeight: 'bolder',
          padding: [0, 0, 0, 6]
        },
      }
    },
    subtextStyle: {
      fontSize: 20
    }
  }
};