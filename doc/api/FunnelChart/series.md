默认值：

```d
series:{
        name: 'Expected',
        type: 'funnel',
        left: '10%',
        width: '80%',
        label: {
            formatter: '{b}Expected'
        },
        itemStyle: {
            opacity: 0.7,
            borderColor: '#fff',
        },
        emphasis: {
            label: {
                position: 'inside',
                formatter: '{b}Expected: {c}%'
            }
        },
        data: [
            { value: 60, name: 'Visit' },
            { value: 40, name: 'Inquiry' },
            { value: 20, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' }
        ]
      }
```

说明：自定义series，{{VITE_BASECOPYRIGHTS}} HUICharts仅对此部分的series进行覆盖，详细参数解释见： 
<a href='https://echarts.apache.org/zh/option.html#series-funnel' target="_blank">https://echarts.apache.org/zh/option.html#series-funnel</a>。