格式示例：

```d
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
```

说明：警告事件状态区间数据，`time`为警告事件的时间点，`type`为警告事件类型。
