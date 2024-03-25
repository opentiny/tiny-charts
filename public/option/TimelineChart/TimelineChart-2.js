function addZero(value) {
  return value < 10 ? `0${value}` : value;
}
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
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const option = {
  theme: 'light',
  mediumStep: 60,
  interval: 10,
  timeRange: {
    startTime: new Date(new Date().toLocaleDateString()).getTime(),
    endTime: new Date(new Date().toLocaleDateString()).getTime() + 86400000,
  },
  currentTime: new Date(`${year}-${month}-${day} 21:00:00`),
  alarmData: [{
    time: new Date(`${year}-${month}-${day} 04:00:00`).getTime(),
    type: 'processed',
    content: 'The CPU usage of the active gateway is less'
  },
  {
    time: new Date(`${year}-${month}-${day} 07:00:00`).getTime(),
    type: 'important',
    content: 'The CPU usage of the active gateway is middle'
  }, {
    time: new Date(`${year}-${month}-${day} 23:00:00`).getTime(),
    type: 'emergency',
    content: 'The CPU usage of the active gateway is high'
  }],
  statusRangeData: [{
    time: [new Date(`${year}-${month}-${day} 00:00:00`).getTime(), new Date(`${year}-${month}-${day} 04:20:00`).getTime()],
    type: 'processed',
  },
  {
    time: [new Date(`${year}-${month}-${day} 06:30:00`).getTime(), new Date(`${year}-${month}-${day} 07:10:00`).getTime()],
    type: 'important',
  }, {
    time: [new Date(`${year}-${month}-${day} 22:00:00`).getTime(), new Date(`${year}-${month}-${day} 24:00:00`).getTime()],
    type: 'emergency',
  }],
  customBackground: { emergency: '#E7434A', important: '#EC6F1A', processed: '#36C18D' },
  onCircleHover: (alarmTooltip, alarmData) => {
    alarmTooltip.innerHTML = `<div class='timeline_tipDom'><div class='tip'><div>
    ${getTime(alarmData.time)}</div><div><span class='point ${alarmData.type}'></span>${alarmData.content}</div></div></div>`
  },
};