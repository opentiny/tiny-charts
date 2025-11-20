const option = {
  theme: 'light',
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
  radarMax: [
    { name: '集群', max: 11 },
    { name: '节点', max: 100 },
    { name: '核心插件', max: 51 },
    { name: '外部依赖', max: 11 },
    { name: '负载', max: 11 },
  ],
  centerDom: () => {
    const waveDom = `
      <div class="wave_center_content">
        <div class="wave_mainText">
          <span class="wave_value" style="font-size:72px;">96</span>
          <span class="wave_unit" style="font-size:14px;">分</span>
        </div>
        <div class="wave_subText" style="font-size:14px;">健康评分</div>
      </div>
          `;
    return waveDom;
  }
};