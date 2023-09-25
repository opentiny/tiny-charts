# 响应式

## 背景

在实际场景中，页面/图表容器的尺寸不是固定的，在不同尺寸下，用户需要的图表的展示形式可能是不一样的。<br>
当页面/图表容器尺寸过小时，为了能让整个图表尽可能的展示完全，一些非必要的属性的显示显得没那么重要，如图例、x 轴文本、y 轴文本等。<br>
当页面/图表容器尺寸足够时，才需要将所有的属性都完全展示出来。<br>
目前 HUI-Charts 提供了一套直角坐标系下的响应式图表属性配置，以达到图表在不同尺寸之间实现最佳平衡的配置。

## 如何使用

```js
// 开启响应式布局（类媒体查询效果）
chartInstance.mediaScreen(dom, screenOption);
// dom是图表开始响应式后依赖的监听对象；根据dom的尺寸配置图表属性。（必填，一般为document.documentElement或者图表容器）
// screenOption是用户传入自己编写的响应式配置。（非必填，数组格式，不传则使用HUI-Charts默认的响应式图表属性）
screenOption 格式：[
  {
    maxWidth:400, // 定义option属性生效的dom尺寸最大值区间
    minWidth:200, // 定义option属性生效的dom尺寸最小值区间
    option:{      // dom尺寸符合maxWidth和minWidth,配置option图表属性。
      legend:{...},
      markLine:{...}
    }
  },
  ...
]
```

## 默认响应式配置
目前 HUI-Charts 提供了一套直角坐标系下的响应式图表属性配置，如下：...

## 响应式设计 demo

