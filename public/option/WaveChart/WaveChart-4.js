const option = {
  theme: 'light',
  showWave: false,
  data: ['集群', '节点', '核心插件', '外部依赖', '负载'],
  position: {
    center: ['50%', '50%'],
    radius: ['35%', '70%']
  },
  centerDom: () => {
    const dom = `
      <div class="wave_center_content">
        <div class="wave_subText" style="font-size:24px;">健康诊断</div>
      </div>
          `;
    return dom;
  }
};