# 连线管理器
连线管理器提供了一些对连线的操作，包括更新、删除、动画、隐藏等接口。
如果你想单独对图表内某条连线进行处理，可以调用lineManager里的对象，进行操作。

## 1.获取连线数据
通过图表实例化对象里的lineManager，获取图表里所有线的实例对象。
```javascript
// 引用图表库
import { MindmapChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
const option = {
  layout: {
    type: 'mindmap',
    direction: 'TB',
    nodeShape: 'rect',
    vGap: 40,
    hGap: 90
  },
  ...
}

// 创建图表实例
this.chartIns = new MindmapChart();
// 初始化图表容器
this.chartIns.init(document.getElementById('dom'));
this.chartIns.setOption(option);
// 开始渲染
this.chartIns.render();
// 线管理器实例对象
this.lineManager = this.chartIns.lineManager.getData();
```

## 2.更新连线数据
```javascript
// for in 循环遍历this.lineManager后，得到的线实例lineManager，可以调用每根线的实例的一些方法
for (let i in this.lineManager) {
  let lineManager = this.lineManager[i];
}
let line = {
    "start": "node23",
    "end": "node31",
    "startConnector": {
        "port": "start",
        "nodeId": "node23",
        "x": 225,
        "y": 240,
        "id": "07b833a25fb697f3",
        "absolute": {
            "x": 1601,
            "y": 590
        }
    },
    "endConnector": {
        "port": "end",
        "nodeId": "node31",
        "x": 575,
        "y": 0,
        "id": "d0abce92d4229251",
        "absolute": {
            "x": 651,
            "y": 650
        }
    },
    "id": "07b833a25fb697f3-to-d0abce92d4229251",
    "lineOption": {
        "type": "Bezier",
        "style": {
            "width": 1,
            "radius": 0,
            "mode": "solid",
            "color": "#09AA71",
            "hover": {
                "color": "#2070F3"
            },
            "active": {
                "color": "red",
                "width": 2
            },
            "disable": {}
        },
        "endMarker": {
            "size": 8,
            "type": "classic",
            "color": "#09AA71",
            "id": "f576d22775340b0c"
        },
        "lineDistance": 0.1
    }
}
lineManager.update(line) // 更新线的起始点、类型和样式
```
## 3.卸载连线
```javascript
lineManager.unmount(line.id)
```
## 4.隐藏连线
```javascript
lineManager.hide(line)
```
## 5.更新连线动效
```javascript
lineManager.animation({
  type: 'streamer'// streamer-流光，grow-生长，dash-虚线流动
  duration: 500,
  path: lineManager.path,
  color: 'color' // 非必配置项，配置后，修改连线的颜色
})
```