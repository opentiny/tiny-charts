格式示例：

```d
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
```

说明：警告事件数据，`time`为警告事件的时间点，`type`为警告事件类型，`content`为警告事件内容，也可以自行增加其他字段。
