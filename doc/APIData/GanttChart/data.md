格式：

```d
 data:[
            { name:'科蓝贷款查询压测',
              data:[
                {
                  startTime:"2022-8-25 13:30:30",
                  endTime:"2022-8-25 13:32:30",
                  status:'during',
                },
                {
                  startTime:"2022-8-25 13:39:28",
                  endTime:"2022-8-25 13:40:58",
                  status:'during',
                },
                {
                  startTime:"2022-8-25 13:45",
                  endTime:"2022-8-25 13:48",
                  status:'success',
                },
              ]
            },
            { name:'多实例性能验证',
              data:[
                {
                  startTime:"2022-8-25 13:40",
                  endTime:"2022-8-25 13:46",
                  status:'success',
                },
                {
                  startTime:"2022-8-25 14:18",
                  endTime:"2022-8-25 14:30",
                  status:'success',
                },
              ]
            },
  ],
```

说明：甘特图的数据,name:当前系列的名称,data:当前系列的具体数据,startTime: 开始时间，endTime: 结束时间，status：当前的状态(目前支持三种状态，分别为'success','during','failed')
