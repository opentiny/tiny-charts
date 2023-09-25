const option = {
  theme: 'light',
  padding: [50, 30, 20, 20],
  legend: {
    show: false,
  },
  data: [
    { "Month": 'Jan', "Domestic": 28, },
    { "Month": 'Feb', "Domestic": 22, },
    { "Month": 'Mar', "Domestic": 35, },
    { "Month": 'Apr', "Domestic": 30, },
    { "Month": 'May', "Domestic": 37, },
    { "Month": 'Jun', "Domestic": 28, },
    { "Month": 'Jul', "Domestic": 20, },
    { "Month": 'Aug', "Domestic": 22, },
    { "Month": 'Sep', "Domestic": 29, },
    { "Month": 'Oct', "Domestic": 38, },
    { "Month": 'Nov', "Domestic": 30, },
    { "Month": 'Dec', "Domestic": 26, }
  ],
  xAxis: {
    data: "Month",
  },
  yAxis: {
    name: "Percent(%)"
  },
  series: [
    {
      name: 'Domestic',
      itemStyle: {
        color: params => {
          if (params.dataIndex % 2 == 0) {
            return "#5CB300";
          }
          return "#FCBE1E";
        }
      },
    }
  ]
};