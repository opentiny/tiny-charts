const getTime = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
function addZero(value) {
  return value < 10 ? `0${value}` : value;
}

const option = {
  theme: 'dark',
  interval: 10,
  mediumStep: 60,
  currentTime: new Date('2024-01-05 21:00:00'),
  timeRange: {
    startTime: new Date(new Date().toLocaleDateString()).getTime(),
    endTime: new Date(new Date().toLocaleDateString()).getTime() + 86400000,
  },
  customBackground: { emergency: '#E7434A', important: '#EC6F1A', processed: '#36C18D' },
  statusRangeData: [{
    time: [new Date('2024-01-05 03:00:00').getTime(), new Date('2024-01-05 04:20:00').getTime()],
    type: 'processed',
  },
  {
    time: [new Date('2024-01-05 06:30:00').getTime(), new Date('2024-01-05 07:10:00').getTime()],
    type: 'important',
  }, {
    time: [new Date('2024-01-05 09:40:00').getTime(), new Date('2024-01-05 10:05:00').getTime()],
    type: 'emergency',
  }],
  alarmData: [{
    time: new Date('2024-01-05 04:00:00').getTime(),
    type: 'processed',
    content: 'The CPU usage of the active gateway is less'
  },
  {
    time: new Date('2024-01-05 07:00:00').getTime(),
    type: 'important',
    content: 'The CPU usage of the active gateway is middle'
  }, {
    time: new Date('2024-01-05 10:00:00').getTime(),
    type: 'emergency',
    content: 'The CPU usage of the active gateway is high'
  }],
  // 时间轴圆点悬浮事件
  onCircleHover: (alarmTooltip, alarmData) => {
    alarmTooltip.innerHTML = `<div class='tipDom'><div class='tip'><div>
    ${getTime(alarmData.time)}</div><div><span class='point ${alarmData.type}'></span>${alarmData.content}</div></div></div>`
  },
};                                                                          