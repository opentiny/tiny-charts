

## 使用方式

通过配置```option.legend.upgrade```来使用拓展图例。

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = "lineChart";
const chartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
    // 拓展图例的配置
    legend:{
        show: true,
        upgrade: {
            type: 'list',//可选参数"mutiselect"、"list"、"singleselect",形态依次对应三个demo（列表与表格形态都使用list参数，区别在于是否有statistics字段）
            itemStyle:{
                maxTextWidth:"280px",
            },
        }
    }
};
chartIns.init(chartContainerDom); 
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```
</br>

扩展图例的宽度可以通过 ```legend.upgrade.width```设置，为整个图表dom宽度的百分比。多选图例的默认宽度为图表宽度的100%（默认占一行）,列表图例的默认宽度为30%，设置width属性后将自动调整图表的位置。

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = "lineChart";
const chartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
    legend:{
        show: true,
        upgrade: {
            type: "list",
            width: "40%",//通过设置该属性控制图例的宽度
        }
    }
};
chartIns.init(chartContainerDom); 
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```

</br>


多选图例的每一项宽度可设置，当超出设定宽度时，超出部分则省略，文字部分默认最大长度为160px，通过设置```legend.upgrade.itemStyle.maxTextWidth```可设定图例文字的长度；列表图例的文字部分默认最大长度根据列表的宽度来确认。支持鼠标悬浮图例展示具体内容,设置```legend.upgrade.itemStyle.showTips```为```true```可打开悬浮框。

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = "lineChart";
const chartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
    legend:{
        show: true,
        upgrade: {
            type: "mutiselect",
            itemStyle:{
                maxTextWidth:"160px",
                showTips:true,//打开tips
            },
        }
    }
};
chartIns.init(chartContainerDom); 
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```

</br>

图例默认为圆点，可通过```legend.upgrade.itemStyle.icon```进行修改，可选参数为```circle```或```line```

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = "lineChart";
const chartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
    legend:{
        show: true,
        upgrade: {
            type: 'list',
            itemStyle:{
                showTips:true,
                icon:'circle',//可选参数circle和line
            },
        }
    }
};
chartIns.init(chartContainerDom); 
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```

</br>

表格形态的图例除了设置```legend.upgrade.type = 'list'```，还需要设置```legend.upgrade.statistics```字段

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = "lineChart";
const chartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
    legend:{
        show: true,
        upgrade: {
            type: 'list',
            statistics: {
                //第一列所占宽度
				firstColumnWidth:"35%",
                //head是表头每一列的内容
                head: [" ", "当前", `占比`, "同比"],
                //data是每个图例对应的详细数据的数组，data的长度与图例的数量应相等
                data: new Array(19).fill(0).map((item, index) => {
                    return [ index+"%",index+"%",index+"%" ]
                })
            }，
            ...
        }
    }
};
chartIns.init(chartContainerDom); 
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```

</br>

图例支持开启复制按钮，在```legend.upgrade.itemStyle.copy```进行修改，可选参数为```true```或```false```

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = "lineChart";
const chartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
    legend:{
        show: true,
        upgrade: {
            type: 'list',
            itemStyle:{
                showTips:true,
                icon:'circle',
                copy:true,
            },
        }
    }
};
chartIns.init(chartContainerDom); 
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```