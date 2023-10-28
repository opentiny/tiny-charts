const option = {
  theme: 'light',
  type: 'risk',
  // 自定中心dom
  centerDom: () => {
    const dom = `
            <div style="font-size:14px;">
              <span style="font-size:56px">24</span>分
            </div>
            <div style="color:#4e4e4e; font-size:12px;">
              健康评分
            </div>`;
    return dom;
  }
};