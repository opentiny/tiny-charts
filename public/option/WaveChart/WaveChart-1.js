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
  radarMark: false,
  radarMax: [
    { name: '集群', max: 10 },
    { name: '节点', max: 100 },
    { name: '核心插件', max: 50 },
    { name: '外部依赖', max: 10 },
    { name: '负载', max: 10 },
  ],
  // 自定义中心dom 如需字体大小自适应，开发者需自行通过媒体查询实现
  centerDom: () => {
    const dom = `
          <div style="font-size:12px;">
            <span class="dom_text">96</span>分
          </div>
          <div style="color:#808080; font-size:12px;">
            健康评分
          </div>`;
    return dom;
  }
};