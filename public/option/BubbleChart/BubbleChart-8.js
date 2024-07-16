/*
* 使用气泡图时，有两点注意事项：
* 1. 数据(data属性)顺序必须严格按照指定的维度来摆放：
* [
*    [维度X 维度Y 气泡半径维度 数据名称 数据分组 ...其他数据]
*    [维度X 维度Y 气泡半径维度 数据名称 数据分组 ...其他数据]
*    ...
* ]
*/
const yAxisLabel = [
  { text: '24:00' },
  { text: '18:00' },
  { text: '12:00' },
  { text: '06:00' },
  { text: '00:00' }
];
// 用户传入的时间戳数据格式
const data = [
  ['2023-10.07 06:00:00', '2023-10.07 06:30:00', '2023-10.08 07:00:00', '2023-10.09 08:00:00', '2023-10.10 09:00:00'],
  ['2023-10.07 13:00:00', '2023-10.08 16:00:00', '2023-10.09 20:00:00', '2023-10.10 23:00:00', '2023-10.10 04:00:00'],
];
// 获取对应时间戳的hour值
const timeToHour = (time) => {
  const hour = new Date(time).getHours();
  const min = new Date(time).getMinutes();
  const sec = new Date(time).getSeconds();
  return hour + min / 60 + sec / 3600;
};
const option = {
  theme: 'light',
  color: ['#FDC000', '#17CC7E'],
  padding: [50, 30, 50, 20],
  legend: {
    show: true,
    position: {
      right: 30,
      top: 15
    },
    orient: 'horizontal'
  },
  bubbleSize: [20, 20],
  xAxisType: 'category',
  data: {
    '中断事件': [
      ['10.07', 24 - timeToHour(data[0][0]), 0, '中断事件', '分支光纤断或OLT检测不到ONT的预期的光信号(LOSiBi)', data[0][0], data[0][0], 'GPON 0/1/0'],
      ['10.07', 24 - timeToHour(data[0][1]), 0, '中断事件', '分支光纤断或OLT检测不到ONT的预期的光信号(LOSiBi)', data[0][1], data[0][1], 'GPON 0/1/0'],
      ['10.08', 24 - timeToHour(data[0][2]), 0, '中断事件', '分支光纤断或OLT检测不到ONT的预期的光信号(LOSiBi)', data[0][2], data[0][2], 'GPON 0/1/0'],
      ['10.09', 24 - timeToHour(data[0][3]), 0, '中断事件', '分支光纤断或OLT检测不到ONT的预期的光信号(LOSiBi)', data[0][3], data[0][3], 'GPON 0/1/0'],
      ['10.10', 24 - timeToHour(data[0][4]), 0, '中断事件', '分支光纤断或OLT检测不到ONT的预期的光信号(LOSiBi)', data[0][4], data[0][4], 'GPON 0/1/0'],
    ],
    '中断恢复': [
      ['10.07', 24 - timeToHour(data[1][0]), 0, '中断恢复', '正常软件复位(LOSiBi)', data[1][0], data[1][0], 'ethernet0/9/3'],
      ['10.08', 24 - timeToHour(data[1][1]), 0, '中断恢复', '正常软件复位(LOSiBi)', data[1][1], data[1][1], 'ethernet0/9/3'],
      ['10.09', 24 - timeToHour(data[1][2]), 0, '中断恢复', '正常软件复位(LOSiBi)', data[1][2], data[1][2], 'ethernet0/9/3'],
      ['10.10', 24 - timeToHour(data[1][3]), 0, '中断恢复', '正常软件复位(LOSiBi)', data[1][3], data[1][3], 'ethernet0/9/3'],
      ['10.10', 24 - timeToHour(data[1][4]), 0, '中断恢复', '正常软件复位(LOSiBi)', data[1][4], data[1][4], 'ethernet0/9/3'],
    ],
  },
  // 悬浮不展示图元文本
  emphasis: {
    label: {
      show: false
    }
  },
  // 图元点击事件
  event: {
    'series': {
      click: (params) => {

      },
    }
  },
  // 图元设置透明度，默认0.2
  symbolOpacity: 0.7,
  yAxis: [
    {
      min: 0,
      max: 24,
      interval: 6,
      axisLabel: {
        formatter: (value, index) => {
          return yAxisLabel[index].text;
        }
      }
    }
  ],
  tooltip: {
    formatter: (params) => {
      const { data } = params;
      let htmlStr = '';

      if (Array.isArray(params)) {
        // trigger===axis的悬浮提示框内容
        params.forEach((item) => {
          htmlStr += `<div>${item.data[3]}：${item.data[1]}</div>`;
        });
      } else {
        // trigger===item的悬浮提示框内容
        htmlStr = `<div>
      <div>${data[3]}</div>
      <div>事件名称：${data[4]}</div>
      <div>产生时间：${data[5]}</div>
      <div>恢复时间：${data[6]}</div>
      <div>位置：${data[7]}</div>
      </div>`;
      }
      return htmlStr;
    },
  },
  // tooltip的显示状态 默认：item
  trigger: 'item'
};
