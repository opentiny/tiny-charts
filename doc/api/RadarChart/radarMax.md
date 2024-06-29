默认值：`雷达图坐标系的最外圈为数据中的最大值`

```d
number类型，统一设置雷达图最外圈代表的数值
Array类型,name为数据子项的key，max为设置的最大值,此时如果配置markLine阈值线的红圈不会显示，如果markLine单独配置数据子项的阈值，请确保小于radarMax
radarMax: [
        {
            name:'Equipment',
            max:20
        }
    ],
```

说明:用来设置雷达图最外圈代表的数值
