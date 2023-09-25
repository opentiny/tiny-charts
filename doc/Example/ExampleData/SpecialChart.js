export default {
  title: '业务定制图表 SpecialChart',
  paths: [
    {
      title: '横向进度图',
      children: [
        {
          name: '横向进度图-阈值',
          routePath: 'SpecialChart-9',
          imagePath: './image/light/SpecialChart/SpecialChart-9.png',
        },
      ]
    },
    {
      title: '聚合气泡图',
      children: [
        {
          name: '聚合气泡图(非嵌套式)',
          routePath: 'SpecialChart-2',
          imagePath: './image/light/SpecialChart/SpecialChart-2.png',
        },
        {
          name: '聚合气泡图(非嵌套聚合式)',
          routePath: 'SpecialChart-3',
          imagePath: './image/light/SpecialChart/SpecialChart-3.png',
        },
        {
          name: '聚合气泡图(嵌套式)',
          routePath: 'SpecialChart-4',
          imagePath: './image/light/SpecialChart/SpecialChart-4.png',
        },
      ]
    },
    {
      title: '标记折线图',
      children: [
        {
          name: '标记折线图',
          routePath: 'SpecialChart-5',
          imagePath: './image/light/SpecialChart/SpecialChart-5.png',
        },
        {
          name: '标记折线图-自定义阈值线文本位置',
          routePath: 'SpecialChart-6',
          imagePath: './image/light/SpecialChart/SpecialChart-6.png',
        },
      ]
    },
    {
      title: '双向面积图',
      children: [
        {
          name: '双向面积图',
          routePath: 'SpecialChart-10',
          imagePath: './image/light/SpecialChart/SpecialChart-10.png',
        },
      ]
    }
  ],
};
