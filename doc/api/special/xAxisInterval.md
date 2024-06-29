默认值：`0`

格式:

```d
// 当xAxisInterval为2时，x轴的label会每隔2个显示
xAxisInterval: 2
```

```d
// 当xAxisInterval为function时，x轴的label会根据函数的返回结果展示。
// 返回true表示显示
// 返回false表示不显示
// index表示当前x轴数据的索引,value表示当前x轴数据的值
xAxisInterval: (index,value) => {
    if (index % 24 === 0) {
        return true;
    }
    if (index === 61) {
        return true;
    }
    return  false;
},
```

说明：设置 x 轴 label 的间距 ， 默认不设置时 ， 会根据图表宽度自适应
