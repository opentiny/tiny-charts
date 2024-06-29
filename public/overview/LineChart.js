[
  {
    theme: 'light',
    padding: [50, 70, 50, 20],
    smooth: true, // smooth属性配置曲线
    legend: {
      show: true,
      icon: 'line',
      type: 'scroll',
      width: 500,
    },
    data: [
      { Month: 'Jan', Train: 83, Bus: 56, Aircraft: 20},
      { Month: 'Feb', Train: 55, Bus: 33, Aircraft: 15 },
      { Month: 'Mar', Train: 63, Bus: 20, Aircraft: 21 },
      { Month: 'Apr', Train: 30, Bus: 43, Aircraft: 75 },
      { Month: 'May', Train: 37, Bus: 33, Aircraft: 43 },
      { Month: 'Jun', Train: 70, Bus: 37, Aircraft: 33 },
      { Month: 'Jul', Train: 42, Bus: 52, Aircraft: 76 },
      { Month: 'Aug', Train: 52, Bus: 12, Aircraft: 63 },
      { Month: 'Sep', Train: 34, Bus: 33, Aircraft: 63 },
      { Month: 'Oct', Train: 40, Bus: 33, Aircraft: 88 },
      { Month: 'Nov', Train: 60, Bus: 23, Aircraft: 65 },
      { Month: 'Dec', Train: 62, Bus: 43, Aircraft: 53 },
    ],
    xAxis: {
      data: 'Month',
      name: 'Time',
    },
    yAxis: {
      name: 'Percentage(%)',
    },
  },
  {
    theme: 'light',
    color: ['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41', '#00aaee'], // 自定义颜色组，线条会循环使用该颜色组
    padding: [50, 30, 50, 20],
    smooth: true,
    legend: {
      show: true,
    },
    data: [
      { Month: 'Jan', Train: 83, Bus: 56, Aircraft: 28 },
      { Month: 'Feb', Train: 55, Bus: 39, Aircraft: 15 },
      { Month: 'Mar', Train: 63, Bus: 20, Aircraft: 28 },
      { Month: 'Apr', Train: 30, Bus: 46, Aircraft: 75 },
      { Month: 'May', Train: 37, Bus: 38, Aircraft: 42 },
      { Month: 'Jun', Train: 70, Bus: 37, Aircraft: 32 },
      { Month: 'Jul', Train: 42, Bus: 58, Aircraft: 76 },
      { Month: 'Aug', Train: 52, Bus: 12, Aircraft: 68 },
      { Month: 'Sep', Train: 34, Bus: 38, Aircraft: 65 },
      { Month: 'Oct', Train: 40, Bus: 38, Aircraft: 88 },
      { Month: 'Nov', Train: 60, Bus: 22, Aircraft: 68 },
      { Month: 'Dec', Train: 62, Bus: 42, Aircraft: 58 },
    ],
    yAxis: {
      name: 'Percentage(%)',
    },
		xAxis: {
      data: 'Month'
    },
  },
  {
    theme: 'light',
    padding: [50, 30, 50, 20],
    step: true, // true属性配置阶梯线
    legend: {
      show: true,
      icon: 'line',
    },
    data: [
      { Month: 'Jan', Train: 83, Bus: 56, Aircraft: 29 },
      { Month: 'Feb', Train: 55, Bus: 39, Aircraft: 15 },
      { Month: 'Mar', Train: 63, Bus: 20, Aircraft: 21 },
      { Month: 'Apr', Train: 30, Bus: 46, Aircraft: 79 },
      { Month: 'May', Train: 37, Bus: 33, Aircraft: 42 },
      { Month: 'Jun', Train: 70, Bus: 39, Aircraft: 32 },
      { Month: 'Jul', Train: 42, Bus: 52, Aircraft: 76 },
      { Month: 'Aug', Train: 52, Bus: 12, Aircraft: 60 },
      { Month: 'Sep', Train: 34, Bus: 39, Aircraft: 69 },
      { Month: 'Oct', Train: 40, Bus: 33, Aircraft: 89 },
      { Month: 'Nov', Train: 60, Bus: 22, Aircraft: 69 },
      { Month: 'Dec', Train: 62, Bus: 49, Aircraft: 56 },
    ],
    xAxis: {
      data: 'Month',
    },
    yAxis: {
      name: 'Units(Number)',
    },
  }
];
