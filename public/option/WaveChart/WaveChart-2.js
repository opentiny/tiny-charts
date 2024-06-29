const option = {
  theme: 'light',
  type: 'warning',
  data: {
    '集群概况': {
      '集群': 2,
      '节点': 60,
      '核心插件': 10,
      '外部依赖': 6,
      '负载': 8
    }
  },
  // 位置和大小
  position: {
    center: ['50%', '50%'],
    radius: ['35%', '70%']
  },
  radarMax: [
    { name: '集群', max: 12 },
    { name: '节点', max: 100 },
    { name: '核心插件', max: 52 },
    { name: '外部依赖', max: 12 },
    { name: '负载', max: 12 },
  ],
  // 自定义中心dom 如需字体大小自适应，开发者需自行通过媒体查询实现
  centerDom: () => {
    const waveTwoDom = `
          <div style="font-size:12px;">
            <span style="font-size:72px">85</span>分
          </div>
          <div style="color:#808080; font-size:12px;">
            健康评分
          </div>`;
    return waveTwoDom;
  }
};