<title>

## 配置项说明

</title>

<api>
<name>theme</name>
<introduce>主题</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`light`

可选值 `light, dark`

说明：图表主题，共有黑白两套主题

</api>

<api>
<name>type</name>
<introduce>甘特图类型</introduce>
<type>String</type>
<required>必填</required>
<defaults>无默认值</defaults>

可选值：`'minute'，'hour'，'day'`

说明：图表类型，目前共有`'minute'`,`'hour'`,`'day'`三种

</api>

<api>
<name>chartPadding</name>
<introduce>图表内边距</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[20, 30, 20, 30]`

说明：调整图表的 padding 值

</api>

<api>
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

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

</api>

<api>
<name>tipHtml</name>
<introduce>悬浮提示框内容配置</introduce>
<type>Function</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
tipHtml 回调函数控制自定义悬浮框：
( data, dataIndex, postIndex
) => string | HTMLElement | HTMLElement[]
```

格式：

```d
tipHtml: (data, dataIndex, postIndex)=>{
      let tagHtml;
      const status = data[dataIndex].data[postIndex].status;
      if (status === 'success') {
        tagHtml = "<span class='tag success'>执行成功</span>";
      } else if (status === 'during') {
        tagHtml = "<span class='tag'>执行中</span>";
      } else {
        tagHtml = "<span class='tag failed'>执行失败</span>";
      }
      return `
            <p class='title'>${data[dataIndex].name}</p>
            ${tagHtml}
            <p class='time'>操作人员：xxx</p>
            <p class='time'>开始时间：${data[dataIndex].data[postIndex].startTime}</p>
            <p class='time'>结束时间：${data[dataIndex].data[postIndex].endTime}</p>
            <span class='ev_linkField'>查看报告</span>`;
    },
```

说明：通过回调函数的参数，自行制作一个 HTML 片段,data 表示数据, dataIndex 当前系列的索引, postIndex 当前数据在系列的索引
</api>
