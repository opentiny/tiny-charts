格式：

```d
    dataset: [
        {
            source: data0
        },
        {
            source: data1
        },
        {
            source: data2
        },
        {
            fromDatasetIndex: 0,
            transform: { type: 'boxplot' }
        },
        {
            fromDatasetIndex: 1,
            transform: { type: 'boxplot' }
        },
        {
            fromDatasetIndex: 2,
            transform: { type: 'boxplot' }
        }
    ]
```

说明：自定义 dataset，需搭配自定义 series 使用，使用方式及属性和 eCharts 一致，请参考 eCharts 配置;

<p class='ev_expand_introduce'>详细参数解释见：https://echarts.apache.org/zh/option.html#dataset</p>
数据变换教程：https://echarts.apache.org/handbook/zh/concepts/data-transform/;
