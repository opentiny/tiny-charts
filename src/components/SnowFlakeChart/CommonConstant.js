// 2.4g、5g接入  无线信号
const radioType = {
  TYPE_5G: '5G',
  TYPE_2G: '2.4G',
  TYPE_LAN: 'LAN',
  TYPE_PON: 'PON'
};

// 不同的箭头间隔
const interval = {
  '2.4G': 20,
  '5G': 10
};

// 连线文本样式
const textStyle = (theme) => {
  return {
    fillStyle: theme === 'dark' ? '#f5f5f5' : '#000',
    font: '12px  PingFangSC',
    unitStyle: theme === 'dark' ? '#bbbbbb' : '#999', // 单位字体颜色
    bgStyle: 'transparent' // 文字块背景色
  };
};

// 连线样式
const lineStyle = (isLAN = false) => {
  return {
    lineWidth: 2,
    strokeStyle: isLAN ? '#777777' : '#FBD52D'
  };
};

// canvas方向
const direction = {
  left: 'left',
  right: 'right'
};

// 置灰态的透明度
// tag、line是直接变灰
// 节点根据类型/mac，判定是否变灰
const opacity = 0.3;

// 设置tag的定位值
const tagPosition = 88;
const tagActivePosition = 80;


// 默认信号强度文本色
const singlecolor = '#36C18D';
// warning信号强度文本色
const singleWarnColor = '#f43146';
// 叶子的2.4G的warning的min值
const singleMin2G = -75;
// 叶子的5G的warning的min值
const singleMin5G = -72;
// 叶子的warning的max值
const singleMax = 0;


// 下钻前的主从网关之间的连线距离
const distanceDefault = 400;
// 下钻前的从网关之间的连线距离
const subRootGap = 20;

// 下钻后的主从网关之间的连线距离
const distanceDrillDefault = 800;

export {
  radioType,
  textStyle,
  direction,
  interval,
  lineStyle,
  opacity,
  tagPosition,
  singlecolor,
  singleWarnColor,
  singleMin2G,
  singleMin5G,
  singleMax,
  distanceDefault,
  distanceDrillDefault,
  tagActivePosition,
  subRootGap
};

// topo图字段
// interface DeviceInfo {
//   deviceType: DeviceRole; // 设备类型(图片)
//   deviceName: string; // 设备名称
//   onlineStatus: number; // 1 在线
//   mac: string; // 用作唯一标识？
//   connectInterface: 'LAN*' | 'PON*' | 'SSID-2.4G'; // 接入方式
//   // radioType: '2.4G' | '5G'; // 无线
//   onlineDuration: number; // 在线时长
//   signalStrength: number; // 信号强度，不带单位, 2.4G 阈值-75，5G 阈值-72,（单位，自行判断是否超过阈值）
//   rxPower: number; // 光功率（从网关需要判断：SSID 显示信号强度，其他显示光功率。 主网关固定光功率，主网关无信号强度字段。sta 固定信号强度）
//   rxPowerMin: number; // 光功率阈值最小值，用于判断光功率是否需要染色 （主从网关需要判断阈值，超过变红）
//   rxPowerMax: number; // 光功率阈值最大值，用于判断光功率是否需要染色
//   children: DeviceInfo[],
//   faultNum: number, // 故障数量
//   wifiChannel: string; // 信道
//   upNegotiatedRate; // 上行协商速率
//   downNegotiatedRate; // 下行协商速率
//   upRealTimeRate; // 上行实时速率
//   downRealTimeRate; // 下行实时速率
// }