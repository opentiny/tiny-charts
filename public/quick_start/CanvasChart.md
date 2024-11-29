```javascript
import {MindmapChart} from '{{VITE_BASECOPYRIGHTSPAT}}';
import Node from './Node.vue';
import '{{VITE_BASECOPYRIGHTSPAT}}/feature/Vue-node.js';
const chartOption = {
    data:  [...],
    render: Node,
    canvas: {  
      show: true,
      grid: {
        size: 20,
        show: true,
        type: 'dot', //dot mesh doubleMesh
        config: {
          color: '#aaaaaa', // 颜色
          unitSize: 1, // 宽度
        }
      }
    },
};
const chartIns = new MindmapChart();
chartIns.init(chartContainerDom); 
chartIns.setOption(chartOption);
chartIns.render();
```