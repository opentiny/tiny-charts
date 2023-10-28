const option = {
  theme: 'hwCloud-light',
  showWave: false,
  data: ['集群', '节点', '核心插件', '外部依赖', '负载'],
  position: {
    center: ['50%', '50%'],
    radius: ['30%', '80%']
  },
  // 自定义内部dom
  centerDom: () => {
    const dom = `
          <div style="color:#808080;font-size:24px;">
              健康诊断
          </div>`;
    return dom;
  }
};