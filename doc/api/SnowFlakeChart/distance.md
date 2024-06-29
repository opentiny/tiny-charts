默认值：

```d
distance: {
  minDistance: 200, // 全网视口，主从网关的圆心的最小距离
  minDistanceDrill: 400 // 下钻视口，主从网关的圆心的最小距离
}
```

说明：对不同视口下设置主网关外环容器右侧距离从网关圆心的最小距离，如果存在重叠的可能，组件内部会动态调整distance属性
<!-- `两个视口都满足以下条件：当设置的distance/distanceDrill 最小距离后，如果从网关外环容器存在重叠的可能，会先压缩其尺寸比例，直到刚好等于minRatio，就不再继续压缩。接着拉长distance/distanceDrill，直到所有互不重叠。` -->
