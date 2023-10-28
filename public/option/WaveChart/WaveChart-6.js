const option = {
  theme: 'light',
  type: 'warning',
  data: ['ELP', 'EIP', 'EDP', 'ASD', 'FDP'],
  //位置和大小
  position: {
    center: ['50%', '50%'],
    radius: '80%'
  },
  // 自定中心dom
  centerDom: () => {
    const dom = `
            <div style="font-size:14px;">
              <span style="font-size:56px">62</span>分
            </div>
            <div style="color:#4e4e4e; font-size:12px;">
              健康评分
            </div>`;
    return dom;
  }
};