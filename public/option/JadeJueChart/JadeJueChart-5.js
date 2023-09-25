const option = {
  theme: 'hwCloud-light',
  data: [
    {
      name: '英国',
      children: [
        { type: '人口', value: 10 },
        { type: '海洋', value: 10 },
        { type: '领土', value: 20 }
      ]
    },
    {
      name: '法国',
      children: [
        { type: '人口', value: 10 },
        { type: '海洋', value: 20 },
        { type: '领土', value: 10 }
      ]
    },
    {
      name: '中国',
      children: [
        { type: '人口', value: 40 },
        { type: '海洋', value: 30 },
        { type: '领土', value: 30 }
      ]
    },
    {
      name: '俄罗斯',
      children: [
        { type: '人口', value: 20 },
        { type: '海洋', value: 30 },
        { type: '领土', value: 40 }
      ]
    },
    {
      name: '美国',
      children: [
        { type: '人口', value: 40 },
        { type: '海洋', value: 40 },
        { type: '领土', value: 40 }
      ]
    },
  ],
  //自定义最大值，用于展示data中每项数据在最大值的占据比例，一般可取value最大值。
  //未定义则data中每项数据的占比为其value值与总value值的比值。
  max: 120,
};
