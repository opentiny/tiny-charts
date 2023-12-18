const setStyle = (dom, styles) => {
  for (let i in styles) {
    dom.style[i] = styles[i];
  }
};

const renderNode = (container, extra, data) => {
  setStyle(container, {
    width: '83px',
    height: '83px',
    ' background- image': 'linear-gradient(130deg, rgba(89,144,253,0.20) 1%, rgba(89,144,253,0.00) 100%)',
    background: '#000',
    borderRadius: '50%',
    border: '4px solid #5990fd',
    'box-shadow': '0 0 76px 0 #2E69DE, inset 0 0 11px 0 rgba(255,255,255,0.50), inset 0 0 23px 0 #5990FD'
  });
  if (data.children && data.children.length) {
    setStyle(container, {
      width: '126px',
      height: '126px',
    });
    container.innerHTML = `<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;'>
    <img src='./image/Doc/deviceImg/${data.className}.png' style='width:40px;height:40px' draggable=false></img>
    <div style='font-size:20px;color:#ffffff;line-height:20px;margin:4px 0'>${data.name}</div>
    <div style='font-size:10px;color:#bbbbbb;line-height:14px;margin-bottom:4px'>在线时长：${data.onLineTime}</div>
    <div style='font-size:12px;color:#0D9458;line-height:14px'>${data.single}</div>
    </div>`;
  }
  else {
    container.innerHTML = `<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;'>
  <img src='./image/Doc/deviceImg/${data.className}.png' style='width:20px;height:20px' draggable=false></img>
  <div style='font-size:12px;color:#ffffff;line-height:14px;margin:4px 0'>${data.name}</div>
  <div style='font-size:8px;color:#bbbbbb;line-height:10px'>${data.single}</div>
  </div>`;
  }

  // 接入端口
  if (data.connectInterface) {
    setStyle(extra, {
      width: '60px',
      height: '20px',
      borderRadius: '50%',
      background: `url(./image/Doc/deviceImg/${data.connectInterface}.png) no-repeat center center`,
    });
  } else {
    setStyle(extra, {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: '#232323',
      border: '1px solid #e40cff',
      textAlign: 'center',
      lineHeight: '28px',
      fontSize: '12px',
      color: '#fff'
    });
    extra.innerHTML = data.channelNUm || 0;
  }
};

const option = {
  theme: 'dark',
  render: (container, extra, data) => {
    renderNode(container, extra, data);
  },
  data: [
    {
      className: 'Gateway',
      name: '主网关',
      mac: '1',
      single: '-24dBm',
      onLineTime: '25天',
      children: [
        {
          className: 'SmartPhone',
          name: 'sta-0',
          mac: '2',
          single: '-24dBm',
          connectInterface: 'LAN1',
          channelNUm: 20,
          onLineTime: '20天',
          children: [
            // { className: 'PC', name: 'sta-a', upRate: '1111Kpbs', downRate: '2222Kpbs', single: '-24dBm', },
            // { className: 'PC', name: 'sta-b', upRate: '1111Kpbs', single: '-24dBm', },
            // { className: 'PC', name: 'sta-c', upRate: '1111Kpbs', single: '-24dBm', },
            // { className: 'PC', name: 'sta-c', upRate: '1111Kpbs', single: '-24dBm', }
          ]
        },
        // {
        //   className: 'SmartPhone',
        //   name: 'sta-0',
        //   mac: '2',
        //   isAp: 1,
        //   single: '-24dBm',
        //   connectInterface: 'LAN1',
        //   channelNUm: 20,
        //   onLineTime: '20天',
        //   children: [
        //     { name: 'sta-a', upRate: '1111Kpbs', downRate: '2222Kpbs', single: '-24dBm', },
        //     { name: 'sta-b', upRate: '1111Kpbs', single: '-24dBm', }
        //   ]
        // },
        {
          className: 'PC',
          name: 'sta-1',
          mac: '4',
          isAp: 0,
          single: '-24dBm',
          upRate: '1111Kpbs',
          downRate: '2222Kpbs',
          radioType: '2.4G',
          channelNUm: 10,
        },
        {
          className: 'Games',
          name: 'sta-2',
          mac: '5',
          isAp: 0,
          single: '-24dBm',
          upRate: '1111Kpbs',
          downRate: '2222Kpbs',
          radioType: '2.4G',
          channelNUm: 30,
        },
        {
          className: 'PAD',
          name: 'sta-3',
          mac: '6',
          isAp: 0,
          single: '-24dBm',
          upRate: '1111Kpbs',
          connectInterface: 'LAN2',
        },
        {
          className: 'PAD',
          name: 'sta-4',
          mac: '7',
          isAp: 0,
          single: '-24dBm',
          upRate: '1111Kpbs',
          radioType: '5G',
        },
      ],
    },
  ],
};