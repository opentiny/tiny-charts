export default {
  title: '流程图 FlowChart',
  paths: [
    {
      title: '经典场景',
      children: [
        {
          name: '流程图-标准场景',
          routePath: 'FlowChart-2',
          imagePath: './image/light/FlowChart/FlowChart-2.png',
        },
        {
          name: '流程图-树状结构',
          routePath: 'FlowChart-1',
          imagePath: './image/light/FlowChart/FlowChart-1.png',
        },
        {
          name: '流程图-跨级链接',
          routePath: 'FlowChart-3',
          imagePath: './image/light/FlowChart/FlowChart-3.png',
        },
      ]
    },
    {
      title: '基础能力',
      children: [
        {
          name: '禁止节点拖拽',
          routePath: 'FlowChart-4',
          imagePath: './image/light/FlowChart/FlowChart-4.png',
        },
        {
          name: '纵向排布',
          routePath: 'FlowChart-6',
          imagePath: './image/light/FlowChart/FlowChart-6.png',
        },
        {
          name: '自定义连线样式',
          routePath: 'FlowChart-5',
          imagePath: './image/light/FlowChart/FlowChart-5.png',
        }
      ]
    },
  ],
};
