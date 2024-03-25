格式：

```d
data: [
  {
    mac: '1', // 区分网关唯一性
    isRoot: 'true',// 是否为根网关容器
    faultNumber: '3', // 故障数量
    faultLevel: '1||2',// 1是红色严重故障，2是黄色一般故障
    disabled: true, // 节点是否置灰
    click: (e, data) => { }, // 节点自身的点击回调
    containerClick: (e, data) => { }, // 节点所在的容器的点击回调
    render: ({ nodeContainer, tagContainer }, data, option) => { }, // 节点自身的自定义渲染函数
    children: [
      {
        mac: '2',
        isAP: 1, // 1表示为此节点是非叶子节点，有children属性。属于是雪花图上的一个分支
        upRate: '1111Kpbs', // 当前节点与其父节点连线上的上行速率
        downRate: '2222Kpbs', // 当前节点与其父节点连线上的下行速率
        connectInterface: 'LAN||PON||SSID-2.4G||SSID-5G', // 当前节点与其父节点连线样式
        click: () => { },
        containerClick: () => { },
        render: () => { },
        children: [...]
      },
      {
        mac: '3',
        isAP: 0, // 0表示为此节点是叶子节点，无children属性。
        upRate: '1111Kpbs',
        downRate: '2222Kpbs',
        connectInterface: 'LAN||PON||SSID-2.4G||SSID-5G',
        click: () => { },
        containerClick: () => { },
        render: () => { },
      }
    ]
  }
]
```

说明：图表的数据
