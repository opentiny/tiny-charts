const option = {
  theme: 'light',
  data: [
    { name: '机关干部', value: 70 },
    { name: '专家学者', value: 90 },
    { name: '单位职工', value: 110 },
    { name: '农村居民', value: 120 },
    { name: '外裔华人', value: 110 },
  ],
  // 自定义最大值，用于展示data中每项数据在最大值的占据比例，一般可取value最大值。
  // 未定义则data中每项数据的占比为其value值与总value值的比值。
  max: 120,
  // 起点角度，默认值为90
  startAngle: 270,
  // 起点在文本的哪侧，默认值right
  labelAlign: 'left',
  title: {
    text: '人口统计',
    subtext: '2021-5-16',
    textStyle: {
      textSize: 30,
      fontWeight: 'bold'
    },
    subtextStyle: {
      textSize: 12,
      color: '#191919',
    }
  }

};
