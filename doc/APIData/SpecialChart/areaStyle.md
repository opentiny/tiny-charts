格式:

```d
const areaStyle_base=[
    // 上方面积区域，(从上至下渐变，y:1,y2:0)
    {
        color: {
        type: linear,
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: rgba(41,124,140,0)
            },
            {
                offset: 1,
                color: rgba(41,124,140,1)
            }
        ]
        }
    },
    // 下方面积区域，(从下至上渐变，y:0,y2:1)
    {
        color: {
        type: linear,
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: rgba(41,124,140,0)
            },
            {
                offset: 1,
                color: rgba(41,124,140,1)
            }
        ]
        }
    }
]
```

说明:设置设置双向面积图的 面积区域样式，顺序不可颠倒，且 length 为 2。如果某个部分不需要调整，在对应位置写{}。<br>
索引为 0-----上方面积区域<br>
索引为 1-----下方面积区域<br>
通过调整 x、y、y1、y2 设置渐变方向。通过调整 colorStops 设置渐变颜色。
