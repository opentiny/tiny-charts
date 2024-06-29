格式：

```javascript
lineStyle: {
    // 宽度
    width: 1,
    // 虚线(不建议使用)
    dash: true,
    // 形态， 目前支持 Bezier（贝塞尔曲线）、 Round（圆角）、 Straight（直线）
    type: 'Bezier',
    // 颜色,当mode为solid和dash时生效
    color: '#c2c2c2',
    // 线类型,默认是solid,目前支持solid（实线）、dash（虚线）、trans（流程线）
    mode: 'solid',
    // 流程线图形,可以传值图片路径或者base64图片，当mode为trans时生效
    transPattern: ''
},
```
