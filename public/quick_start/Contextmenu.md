# 右键菜单
当用户在某个特定区域上点击鼠标右键后出现的菜单，可展示特定内容，支持触发自定义事件。

## 1.使用方式

通过配置`menu`属性实现右键菜单：

```javascript
// 引用图表库
import {MindmapChart} from '{{VITE_BASECOPYRIGHTSPAT}}';
const option = {
	menu: { // 右键菜单
    node: { // 支持node、line、legend、canvas
      data: [
        { icon: './image/charts/contextmenu/delete.svg', label: '删除节点', value: 'delete' },
        { icon: './image/charts/contextmenu/copy.svg', label: '复制节点', value: 'copy' },
        { icon: './image/charts/contextmenu/merge.svg', label: '合并节点', value: 'merge' },
        { icon: './image/charts/contextmenu/setting.svg', label: '数据配置', value: 'setting' },
        { icon: './image/charts/contextmenu/add.svg', label: '新增子节点', value: 'add' },
      ]
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

