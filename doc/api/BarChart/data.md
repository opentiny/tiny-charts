格式：

```d
普通柱状图  堆叠柱状图  瀑布柱状图
data: [
        { "Month": 'Jan', "Domestic": 33, "Abroad": 37 },
        { "Month": 'Feb', "Domestic": 27, "Abroad": 39 },
        { "Month": 'Mar', "Domestic": 31, "Abroad": 20 },
        ...
]
```

```d
双向柱状图
data: [
        { "Month": 'Jan', "Domestic": 33, "Abroad": -37 },
        { "Month": 'Feb', "Domestic": 27, "Abroad": -39 },
        { "Month": 'Mar', "Domestic": 31, "Abroad": -20 },
        ...
]
```

```d
区间柱状图
data: [
        { "Month": 'Jan', "Domestic": [5,20], "Abroad": [5,23] },
        { "Month": 'Feb', "Domestic": [10,30], "Abroad": [8,25] },
        { "Month": 'Mar', "Domestic": [8,25], "Abroad": [2,20] },
        ...
]
```

说明：图表数据 ， Month 为 x 轴数据 ， Domestic 、 Abroad 为 柱状图数据名称 ， Month 及柱状图数据名称可更换
