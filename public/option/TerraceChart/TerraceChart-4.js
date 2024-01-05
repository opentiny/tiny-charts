const option = {
  theme: 'cloud-light',
  showTerrace: false,
  position: {
    center: ['50%', '50%'],
    radius: ['30%', '70%']
  },
  // 自定义中心dom 如需字体大小自适应，开发者需自行通过媒体查询实现
  centerDom: () => {
    const dom = `
          <div style="color:#808080;font-size:24px;">
              健康诊断
          </div>`;
    return dom;
  }
};