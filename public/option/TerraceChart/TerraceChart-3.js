const option = {
  theme: 'cloud-light',
  type: 'risk',
  // 自定义中心dom 如需字体大小自适应，开发者需自行通过媒体查询实现
  centerDom: () => {
    const dom = `
          <div style="font-size:12px;">
            <span style="font-size:72px">59</span>分
          </div>
          <div style="color:#808080; font-size:12px;">
            健康评分
          </div>`;
    return dom;
  }
};