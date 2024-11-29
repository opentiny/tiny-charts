## 2.使用方式
通过connector属性控制连接点相关参数，下面是连接点的简单使用：

</br>

```javascript
// html片段
<div id='chartContainer'></div>
```

```javascript
// javascript片段
// 引入图表库
import { CircleChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
const chartOption = {
    data:  {...},
		layout:{
			nodeShape: 'rect'
		},
    connector: {  
      show: true,
      startSharing: 'merge',
      endSharing: 'merge',
    	type: 'dot',
			style: {
				width: '6px',
				height: '6px',
				background: 'red'
			},
			render: (data) => {
			  console.log(data)
			},
			onClick:(data) => {
			  console.log(data)
			}
    }
};
const chartDom = document.getElementById('chartContainer');
const chartIns = new CircleChart();
chartIns.init(chartDom); 
chartIns.setOption(chartOption);
chartIns.render();

```

## 3.配置项详情

</br>

| 名称   | 说明 |  类型 | 必选 |    默认值 | 
| :----- |  :----- |  :----- |  :-----  |  :-----  |  
| show |  连接点显示   | `boolean` | `false` | `false` |
| type |  连接点类型<br> 可选值： `dot`、`expand`   | `string` | `false` | `dot` |
| startSharing | 起始连接点均分类型(配置nodeShape:rect矩形节点起用)<br> 可选值：`merge`、`sharing`、`strict`  |`string` | `false` | `merge` |
| endSharing |  结束连接点均分类型(只对配置nodeShape:rect矩形节点起用)<br> 可选值：`merge`、`sharing`、`strict` | `string` |`false` |`merge` |
| centerCircle |  连接点是否位于圆心(只对配置nodeShape:circle圆形节点起用)   | `boolean` | `false` | `false` |
| style |  连接点样式控制，例如style:{width:'6px',height:'6px',background:'red'}| `object` |`false` |`无` |
| onClick |  连接点点击执行函数，参数为连接点信息| `function` |`false` |`无` |
| render |  连接点重绘，参数为连接点信息，返回html文本，替换当前连接点DOM| `function` |`false` |`无` |