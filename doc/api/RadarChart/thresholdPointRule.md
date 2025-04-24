说明：图表的阈值点规则
示例一：
```d
thresholdPointRule:{
    outer: true // true: 大于等于阈值时显示为红色。 false： 小于阈值时显示为红色。
}
```
示例二：
```d
// value:雷达图数据；markLine：阈值
thresholdPointRule: (value, markLine) => {
    return value > markLine
}
```
