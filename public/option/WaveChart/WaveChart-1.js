const option = {
  theme: 'hwCloud-light',
  type: 'health',
  data: {
    '集群概况': {
      '集群': 2,
      '节点': 60,
      '核心插件': 10,
      '外部依赖': 6,
      '负载': 8
    }
  },
  splitNumber: 5,
  radarMark: true,
  radarMax: [
    { name: '集群', max: 10 },
    { name: '节点', max: 100 },
    { name: '核心插件', max: 50 },
    { name: '外部依赖', max: 10 },
    { name: '负载', max: 10 },
  ],
  // 自定中心dom
  centerDom: () => {
    const dom = `
          <div style="font-size:18px;">
            <span style="font-size:72px">96</span>分
          </div>
          <div style="color:#808080; font-size:18px;">
            健康评分
          </div>`;
    return dom;
  }
};