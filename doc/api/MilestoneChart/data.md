格式：

```d
data: [
    {
        id: 0,
        date: 1680274100,
        icon: {
            name: 'success',
            color: '#2da769',
            src: './image/charts/MilestoneChart/success.svg'
        },
        tips: {
            year: '2023年',
            text: '应付关帐',
            date: '3/31 23:00'
        },
    },
    {
        id: '1',
        date: 1680278100,
        icon: {
            name: 'done',
            color:'#2da769'
        },
        line: {
            height: 8,
            color: '#2da769'
        },
        tips: {
            date: '3/31 24:00',
            text: '资产关账',
        },
    },
  ...
];
```

说明：图表数据  
    `date`: 时间戳数据(必选)    
    `icon`: 图标配置（必选)    
    &ensp;&ensp;└─`name`: 内置图标名称：（success、done、doing、todo ）   
    &ensp;&ensp;└─`color`：图标、引线颜色   
    &ensp;&ensp;└─`src`：自定义图标路径（可选）  
    `line`: 节点之间连线配置（必选）   
    &ensp;&ensp;└─`height`：线的高度   
    &ensp;&ensp;└─`color`：线的颜色（两点间的线由下一个节点的颜色决定）    
    `prompt`: 是否需要高亮标注   
    `promptIcon`: 高亮标注图标    
    `tips`: 节点文本配置（可选；未配置时显示为时间戳对应的年月）
