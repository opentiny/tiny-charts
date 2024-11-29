## 2.配置项详情
关系图引擎提供节点`node`、线条`line`、图例`legend`、画布`canvas`的右键菜单，在需要添加右键菜单的属性下面添加以下配置项：
</br>

| 名称   | 说明 |  类型  |    默认值 | 
| :----- |  :----- |  :-----  |  :-----  |  
| data |  节点数据   | `array` |  `无`|
| &ensp;&ensp;└─icon |  图标路径   | `string` |   `无`| 
| &ensp;&ensp;└─label |  描述文本   | `string` |  `无` | 
| &ensp;&ensp;└─value |  节点标识值   | `string` |  `无` | 
| onclick |  点击事件<br/>参数： `itemData` 菜单节点数据、`targetId` 触发器标识、 `event`Event对象 |`function`  |`无` |
| itemRender | 自定义节点元素<br/>参数： `itemData`菜单节点数据、 `targetId`触发器标识  |`function` | `无`  |


## 3.右键菜单实例方法
图表配置项未配置`menu`右键菜单的情况下，用户在后期需要右键菜单功能时，还可通过`setContextMenu`实例方法创建右键菜单。

```javascript
// 引用图表库
import {MindmapChart} from '{{VITE_BASECOPYRIGHTSPAT}}';
const menu = { 
    // 右键菜单
    node: {
      data: [
        { icon: './image/charts/contextmenu/delete.svg', label: '删除节点', value: 'delete' },
        { icon: './image/charts/contextmenu/copy.svg', label: '复制节点', value: 'copy' },
        { icon: './image/charts/contextmenu/merge.svg', label: '合并节点', value: 'merge' },
        { icon: './image/charts/contextmenu/setting.svg', label: '数据配置', value: 'setting' },
        { icon: './image/charts/contextmenu/add.svg', label: '新增子节点', value: 'add' },
      ]
    },
  };
const option = {
  // 图表数据
  data: {
    id: 'root',
    text: '产品研发中心',
    peopleNum: 100,
    children: [
      {
        id: 'researchDept',
        text: '研发部',
        peopleNum: 20,
      },
      {
        id: 'designDept',
        text: '设计部',
        peopleNum: 60
      }
    ]
  },
};
let chartIns = new MindmapChart();
chartIns.init(chartContainerDom); 
chartIns.setOption(option);
chartIns.render();
// 需要使用右键菜单的时候，通过 setContextMenu 创建右键菜单
chartIns.setContextMenu(menu);
``` 

## 4.自定义节点元素
下面是一个通过`itemRender`配置项自定义节点元素的案例：

```javascript
// 引用图表库
import {MindmapChart} from '{{VITE_BASECOPYRIGHTSPAT}}';
const option = {
	menu: { // 右键菜单
    node: {
      data: [
        { icon: './image/charts/contextmenu/delete.svg', label: '删除节点', value: 'delete' },
        { icon: './image/charts/contextmenu/copy.svg', label: '复制节点', value: 'copy' },
        { icon: './image/charts/contextmenu/merge.svg', label: '合并节点', value: 'merge' },
        { icon: './image/charts/contextmenu/setting.svg', label: '数据配置', value: 'setting' },
        { icon: './image/charts/contextmenu/add.svg', label: '新增子节点', value: 'add' },
      ],
     itemRender: (itemData, targetId) => { // 自定义菜单节点
        return `<div style="display: flex; align-item: center;">
        <p style=" margin-right: 6px;">${itemData.label}}</p>
        <img style="width: 20px; height: 20px;" src=${itemData.icon} alt="" />
        <div>`
      },
    },
  },
  // 图表数据
  data: {
    id: 'root',
    text: '产品研发中心',
    peopleNum: 100,
    children: [
      {
        id: 'researchDept',
        text: '研发部',
        peopleNum: 20,
      },
      {
        id: 'designDept',
        text: '设计部',
        peopleNum: 60
      }
    ]
  },
};
let chartIns = new MindmapChart();
chartIns.init(chartContainerDom); 
chartIns.setOption(option);
chartIns.render();
```

