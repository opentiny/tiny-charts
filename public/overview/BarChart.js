[
  {
    theme: 'light',
    padding: [50, 30, 50, 20],
    data: [
      { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 15 },
      { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
      { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
      { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
      { 'Month': 'May', 'Domestic': 37, 'Abroad': 15 },
      { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
      { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
      { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
      { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
      { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
    ],
    xAxis: {
      data: 'Month',
    },
    yAxis: {
      name: 'Percentage(%)',
    },
  },
  {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    type: 'stack',
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 5 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 5 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Percent(%)'
    }
  },
  {
    theme: 'light',
    padding: [30, 80, 50, 20],
    legend: {
      show: true,
    },
    data: [
      { Name: 'Elastic', Domestic: 31, Abroad: 20 },
      { Name: 'Bare Metal Server', Domestic: 30, Abroad: 15 },
      { Name: 'Object Store', Domestic: 27, Abroad: 39 },
      { Name: 'Cloud Hard Drive', Domestic: 33, Abroad: 37 },
    ],
    direction: 'horizontal', // 横向柱状图
    xAxis: {
      data: 'Name',
    },
    // 在横向柱状图中，Y轴的名称在右下角
    yAxis: {
      name: 'Units',
    },
  }
];
