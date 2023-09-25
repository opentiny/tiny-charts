const option = {
  showWave:false,
  position:{
    radius:'68%'
  },
  data:['系统','事件','告警','资源'],
  // 自定义内部dom
  centerDom:()=>{
    const dom=`
          <div style="color:rgba(125,130,130);">
              健康诊断
          </div>`;
    return dom;
  }
};