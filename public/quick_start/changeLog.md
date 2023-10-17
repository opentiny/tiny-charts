# 版本发布日志

## 🎊1.1.62
发布时间：未发布

- ✨ : 新增支持自定义主题功能，通过调用HuiCharts.registerTheme(name,colorConfig) 。同时支持配置全局默认主题调用HuiCharts.theme(name) ,name目前支持'dark','light', 'cloud-dark','cloud-light'四个可选值，增加全局的tip
- ✨ : 新增支持init附加参数
- ✨ : 新增支持可手动关闭/开启容器宽高检测时图表自适应
- ✨ : 新增支持可手动关闭/开启窗口宽高检测时图表自适应
- ✨ : 新增支持可手动调整自适应时的防抖时延
- ✨ : 新增支持render时传入echarts setoption的第二个参数
- ✨ : 新增支持x轴可修改type类型
- ✨ : 新增支持tooltip可手动控制显示/隐藏
- ✨ : 新增支持线形图和柱状图可选择指定数据进行堆叠，默认全部参与堆叠
- ✨ : 新增进度图中StackProcessBarChart支持数据缺省柱条圆角适配
- ✨ : 新增自定义DOM，支持用户创建自定义数据状态
- ✨ : 新增百度地图
- ✨ : 修改五种内置数据状态的图标
- ✨ : 进度图进行了代码层面的重构,对相关功能进行整合和拓展


### 🐞 Bug Fixes
- 🐞 : 修复进度图中StackProcessBarChart左侧产生空白偏移的bug


## 🎊1.1.60
发布时间：9.15

- ✨ : 新增支持echarts原生配置接口setEchartsOption
- ✨ : 新增支持echarts属性代替，使用extend属性可直接替代hui-charts内置属性
- ✨ : 新增支持echarts属性覆盖，可对option上提供的属性添加echarts原生配置进行覆盖
### 🐞 Bug Fixes
- 🐞 : 修复自定义数据状态中showState不生效的问题
- 🐞 : 玉玦图图例展示调整为由外向内的顺序


## 🎊1.1.56
发布时间：9.08

- ✨ : 流程图新增支持0节点分支，支持纵向布局
- ✨ : 新增K线图
- ✨ : 新增关系图
- ✨ : 新增聚合气泡图

### 🐞 Bug Fixes
- 🐞 : 修复进度图方向倒转和title，text配置文本颜色无效的bug
- 🐞 : 玉玦图数据展示调整为由内向外，修复数据节点的dataIndex与seriesIndex不匹配的bug

</br>
</br>

## 🎊1.1.55

发布时间：9.05
- ✨ : 新增旭日图
- ✨ : 新增漏斗图
- ✨ : 新增线形图支持一键mini，该属性适合在小容器场景下使用，此时会隐藏所有坐标轴，并且让图表铺满整个容器
- ✨ : 新增tooltip属性，支持echarts原生覆盖
- ✨ : 新增直角坐标系grid属性，支持echarts原生覆盖
- ✨ : 直角坐标系xaxis属性支持echarts原生覆盖，支持数组格式
- ✨ : 进度图中ProcessBarChart的text的自定义formatter的params参数调整了value,data字段的值

</br>
</br>

## 🎊1.1.54

发布时间：9.01

- ✨ : 更改数据异常提示DOM的z-index为99
- ✨ : 更改图例关闭时的颜色

### 🐞 Bug Fixes

- 🐞 : 修复进度图传不同calibrationValue时，图表渲染柱条宽度变化的bug

</br>
</br>


## 🎊1.1.53

发布时间：8.23

- ✨ : 进度图支持图例
- ✨ : 线形图散点UI优化
- ✨ : 线形图和柱状图支持自定义visualMap覆盖
- ✨ : 组织关系图支持卡片点击滚动

</br>
</br>


## 🎊1.1.51

发布时间：8.21

- ✨ : 新增组织关系图
- ✨ : 山峰图支持自定义hover样式
- ✨ : 圆盘图支持自定义复杂中心文本样式

### 🐞 Bug Fixes

- 🐞 : 修复波浪图在showloading时内容重复渲染的问题
- 🐞 : 修复datazoom的滚轮缩放功能屏蔽了页面滚动的BUG


</br>
</br>

## 🎊1.1.49

发布时间：8.17

- ✨ : 圆盘图支持自定义空状态颜色


### 🐞 Bug Fixes

- 🐞 : 修复波纹图在长时间运行时偶尔出现卡顿的现象


</br>
</br>

## 🎊1.1.48

发布时间：8.11

- ✨ : 蜂窝图tooptip可自动识别容器范围进行位置适配
- ✨ : 直角坐标系图表支持自定义x轴左右间距
- ✨ : 线形图支持在连续数据中有离散的场景
- ✨ : 线形图可以通过自定义series实现渐变
- ✨ : 柱状图可以通过自定义series实现渐变
- ✨ : 圆盘图支持自定义series

### 🐞 Bug Fixes

- 🐞 : 修复多张波浪图同时渲染时显示异常的BUG
- 🐞 : 修复蜂窝图showloading不显示的BUG
- 🐞 : 修复堆叠柱状图圆角显示不全的BUG
- 🐞 : 修复波浪图loading状态调用错乱的BUG
- 🐞 : 修复多张蜂窝图同时渲染时显示异常的BUG

## 🎊1.1.37

发布时间：7.07

### ✨ Features

- ✨ : 雷达图新增支持折线阈值线，适用于雷达图各部分数据阈值标准不一的情况
- ✨ : 进度图新增在 tip 不显示的情况下鼠标指针为系统默认鼠标指针
- ✨ : 柱形图新增支持阈值线配置图标
- ✨ : 柱形图新增支持指定数据超过阈值变色/不变色
- ✨ : 柱形图新增支持折住混合时数据超过阈值变色/不变色
- ✨ : 山峰图新增支持阈值线配置图标

</br>
</br>

## 🎊1.1.35

发布时间：2023.7.03

### ✨ Features

- ✨ : 新增山峰图阈值线功能，根据需求选择山峰部分告警和整体告警变色
- ✨ : 新增圆盘图中心文本和 label 支持设置图片的能力
- ✨ : 新增缩放轴 datazoom 支持 startValue 和 endValue 参数
- ✨ : 新增雷达图中不显示阈值线的能力

</br>
</br>

## 🎊1.1.34

发布时间：2023.6.28

### ✨ Features

- ✨ : 新增圆盘图支持数据和为 0 时不显示扇区的能力
- ✨ : 新增雷达图中心文本可配图片的能力

### 🐞 Bug Fixes

- 🐞 : 修复 tooltip 偶尔会超出边界的情况

</br>
</br>

## 🎊1.1.33

发布时间：2023.6.23

### ✨ Features

- ✨ : 新增圆盘图中心文本可配图片的能力
- ✨ : 新增进度图支持配置结尾处文本的能力
- ✨ : 优化气泡图入场动效

</br>
</br>

## 🎊1.1.32

发布时间：2023.6.19

### ✨ Features

- ✨ : 新增进度图中左右双向进度的形态
- ✨ : 新增图表种类：圆环进度图

</br>
</br>

## 🎊1.1.31

发布时间：2023.6.19

### ✨ Features

- ✨ : 蜂窝图新增自定义排列数量，自定义对齐方式
- ✨ : 新增极坐标柱状图数据更新时动效

### 🐞 Bug Fixes

- 🐞 : 修复蜂窝图中给父容器设定 padding 不生效的问题
  </br>
  </br>

## 🎊1.1.30

发布时间：2023.6.19

### 🐞 Bug Fixes

- 🐞: 修复双向面积图引用报错

</br>
</br>

## 🎊1.1.29

发布时间：2023.6.17

### ✨ Features

- ✨ : 新增图表种类：蜂窝图，支持自定义节点，支持自定义鼠标悬浮提示框，蜂窝图使用原生 JS 编写，按需引用

</br>
</br>

## 🎊1.1.28

发布时间：2023.6.17

### ✨ Features

- ✨ : 新增雷达图支持多组数据阈值线能力
- ✨ : 新增热力图支持自定义多边形的能力
- ✨ : 新增柱状图支持上下双向的能力

</br>
</br>

## 🎊1.1.27

发布时间：2023.6.16

### ✨ Features

- ✨ : 新增雷达图支持自定义中心复杂 DOM

</br>
</br>

## 🎊1.1.26

发布时间：2023.6.16

### ✨ Features

- ✨ : 新增仪表盘支持自定义中心复杂 DOM

</br>
</br>

## 🎊1.1.25

发布时间：2023.6.15

### ✨ Features

- ✨ : 新增折线图配置单独为某条线配置阈值线能力
- ✨ : 新增折线图配置阈值线颜色的能力
- ✨ : 新增折线图配置阈值线颜色后响应折线跟随变色的能力
- ✨ : 新增面积图配置单独为某条线配置阈值线能力
- ✨ : 新增面积图配置阈值线颜色的能力
- ✨ : 新增面积图配置阈值线颜色后响应折线跟随变色的能力

</br>
</br>

## 🎊1.1.24

发布时间：2023.6.15

### ✨ Features

- ✨ : 新增折线图支持堆叠的能力
- ✨ : 新增面积图支持堆叠的能力

</br>
</br>

## 🎊1.1.23

发布时间：2023.6.13

### ✨ Features

- ✨ : 柱状图折柱混合方法改写

</br>
</br>

## 🎊1.1.22

发布时间：2023.6.10

### ✨ Features

- ✨ : 柱状图配置数据为 0 时，柱体显示最小高度

</br>
</br>

## 🎊1.1.21

发布时间：2023.6.6

### ✨ Features

- ✨ : 饼图配置数据和为 0 时不显示扇区

  </br>
  </br>

## 🎊1.1.20

发布时间：2023.6.4

### ✨ Features

- ✨ : 圆环进度图配置图例自定义

</br>
</br>

## 🎊1.1.19

发布时间：2023.6.1

### ✨ Features

- ✨ : 新增圆环进度图

</br>
</br>

## 🎊1.1.18

发布时间：2023.5.26

### ✨ Features

- ✨ : 极坐标柱状图配置坐标文本不显示能力

</br>
</br>

## 🎊1.1.17

发布时间：2023.5.25

### ✨ Features

- ✨ : 极坐标柱状图配置自定义悬浮提示框

  </br>
  </br>

## 🎊1.1.16

发布时间：2023.5.24

### ✨ Features

- ✨ : 新增极坐标柱状图

  </br>
  </br>

## 🎊1.1.15

发布时间：2023.5.22

### 🐞 Bug Fixes

- 🐞 : 双向进度图调整 data 类型

  </br>
  </br>

## 🎊1.1.14

发布时间：2023.5.27

### ✨ Features

- ✨ : 新增进度图-双向类型

  </br>
  </br>

## 🎊1.1.13

发布时间：2023.5.25

### 🐞 Bug Fixes

- 🐞 : 双向面积图 md 文件修正及补全

  </br>
  </br>

## 🎊1.1.12

发布时间：2023.5.24

### 🐞 Bug Fixes

- 🐞 : 双向面积图修改 grid、xAxis 属性默认值

  </br>
  </br>

## 🎊1.1.11

发布时间：2023.5.22

### 🐞 Bug Fixes

- 🐞 : 双向面积图修改内部 handleDoubleSides 方法

  </br>
  </br>

## 🎊1.1.10

发布时间：2023.5.22

### ✨ Features

- ✨ : 新增特殊图表-双向面积图

  </br>
  </br>

## 🎊1.1.9

发布时间：2023.5.22

### ✨ Features

- ✨ : 玉玦图新增堆叠类型

  </br>
  </br>

## 🎊1.1.8

发布时间：2023.5.20

### ✨ Features

- ✨ : 新增玉玦图自定义配色 demo

  </br>
  </br>

## 🎊1.1.7

发布时间：2023.5.16

### 🐞 Bug Fixes

- 🐞: 过小精度下，玉玦图背景柱条显示异常的 bug

  </br>
  </br>

## 🎊1.1.6

发布时间：2023.5.15

### ✨ Features

- ✨ : 玉玦图新增属性 barMinRatio，设置数据为 0 的最小占比

  </br>
  </br>

## 🎊1.1.5

发布时间：2023.5.13

### ✨ Features

- ✨ : 玉玦图暴露极坐标系相关属性

  </br>
  </br>

## 🎊1.1.4

发布时间：2023.5.11

### ✨ Features

- ✨ : 新增柱状图-包含形态
- ✨ : 柱状图代码优化

### 🐞 Bug Fixes

- 🐞 : 修复 chartIns.resize 方法报错的 bug
  </br>
  </br>

## 🎊1.1.3

发布时间：2023.5.08

### ✨ Features

- ✨ : 新增极坐标柱状图
- ✨ : 新增柱状图中的数据均为正数-双向柱状图形态
- ✨ : 新增热力图支持自定义形状

  </br>
  </br>

## 🎊1.1.2

发布时间：2023.4.28

### ✨ Features

- ✨ : RiverChart 修改连接带渐变色的 Ui 渲染表现逻辑。
- ✨ : 基础图表提供了 2 种事件监听处理方式，包括：鼠标事件触发，代码事件触发。

  </br>
  </br>

## 🎊1.1.1

发布时间：2023.4.27

### ✨ Features

- ✨ : 新增数据状态事件，包括数据加载中、数据加载失败、数据为空、阶段数据为空、自定义状态。同时支持灵活可配的参数接口。

### 🐞 Bug Fixes

- 🐞 :【BarChart】，修改横向柱状图覆盖公共变量的 bug

</br>
</br>

## 🎊1.0.10

发布时间：

### ✨ Features

- ✨ : 【GaugeChart】:新增 silent 属性，是否关闭 hover 态的效果
- ✨ : 【LineChart、AreaChart】:新增属性 stack,图表是否呈现为堆叠效果
- ✨ : 【LineChart、AreaChart、BarChart、PieChart】:新增属性 emphasis.focus,用于图表 hover 淡色其他图形。

</br>
</br>

## 🎊1.0.9

发布时间：2023.4.23

### ✨ Features

- ✨ : 新增支持 hwCloud-light 和 hwCloud-dark 主题
- ✨ : 新增支持 5 种数据状态： 数据加载中、数据加载失败、数据为空、阶段数据为空、自定义状态
- ✨ : 将原 chartPadding 属性更名为 padding，兼容旧版本

</br>
</br>

## 🎊1.0.8

发布时间：2023.4.18

### ✨ Features

- ✨ :【ProcessBarChart】:新增 state 属性
- ✨ :【聚合气泡图】:新增 event 属性
- ✨ :【text】:新增 text.sub.color、text.sub.fontWeight、text.main.color、text.main.fontWeight、text.itemGap 属性
- ✨ :【legend】:新增 height 属性、formatter 属性自定义图例文本、itemGap 设置图例间距
- ✨ :【dataZoom】:新增 height 设置区域缩放轴高度、dataZoom.style.handleStyle 设置区域缩放轴手柄样式
- ✨ :【xAxis】:新增 nameLocation 设置文本位置、nameTextStyle 设置文本样式

### 🐞 Bug Fixes

- 🐞 :【dataZoom】， dataZoom.show 为 false 时，取消鼠标滚轮触发缩放的功能

</br>
</br>

## 🎊1.0.7

发布时间：2023.4.14

### ✨ Features

- ✨ :【GraphTreeChart】:新增 图表
- ✨ :【FlowChart】:新增 图表
- ✨ :【PieChart】:新增属性 minInterval、maxInterval，设置最小最大间隔
- ✨ :【yAxis】:新增属性 label.lineColor，用来控制连线的颜色

### 🐞 Bug Fixes

- 🐞 :【BarChart】: 修改 markLine.color 不生效的 bug

</br>
</br>

## 🎊1.0.6

发布时间：2023.4.10

### ✨ Features

- ✨ :【GaugeChart】:新增属性 mask.width：自定义蒙层宽度
- ✨ :【legend】:新增子属性 selectedMode：设置图例是否可以点击更改显示状态
- ✨ :【PieChart】:新增属性 minInterval、maxInterval，设置最小最大间隔
- ✨ :【yAxis】:新增属性 label.lineColor，用来控制连线的颜色

### 🐞 Bug Fixes

- 🐞 :【GaugeChart】: 修改 splitLine.distance 的默认值
- 🐞 :【LineChart、AreaChart】: （1）predict 属性修改报错新增判断，匹配不到，不显示预测线 （2）data 数据只有一条，默认显示数据点
- 🐞 :【SpecialChart】: ThresholdProcessBarChart 阈值线默认的 symbol 改为在下方,调整大小

</br>
</br>

## 🎊1.0.5

发布时间：2023.4.1

### ✨ Features

- ✨ :【lineChart、AreaChart】:新增属性 silent:是否去除鼠标 hover 态效果
- ✨ :【GaugeChart】:新增属性 pointerStyle：调整指针样式;itemStyle.lineStyle 属性新增子属性 length：自定义刻度线的长度，默认为 10
- ✨ :【HeatMapChart】:新增 event 属性，支持图表事件
- ✨ :【LineChart,BarChart,AreaChart】:1、属性 yAXis 新增子属性 labelTextStyle：配置 y 轴刻度文本样式;splitLine:配置 y 轴刻度线样式;
  2、新增属性 xAxisLine：设置 x 轴样式（因为 yAxis.splitLine 属性会对 x 轴产生样式影响;可设置此属性进行样式覆盖）

</br>
</br>

## 🎊1.0.4

发布时间：2023.3.20

### ✨ Features

- ✨ :【RadarChart】:增加 unit 属性
- ✨ :【GaugeChart】:新增 itemStyle 属性中的 lineStyle，设置多色盘进度条的间距样式。outerGauge，设置多色盘进度条的外层光晕是否显示,新增 axisLabelStyle 属性，调整刻度文本样式
- ✨ :【GanttChart】:调整头部 tip 显示和最小时间极限值
- ✨ :【BarChart】:增加 xAxisLabelRotate 属性

</br>
</br>

## 🎊1.0.3

发布时间：2023.3.12

### ✨ Features

- ✨ :【LineChart 、 AreaChart】:新增属性:dataZoom.style 用于修改相关的颜色
- ✨ :【PieChart】:新增属性：silent='false',是否关闭图表 hover 态的效果
- ✨ :【AreaChart】:gradientDirection='toBottom',用于调整渐变方向

### 🐞 Bug Fixes

- 🐞 :【LineChart 、 AreaChart】:旧属性 tipHtmlPadding 删除,删除 属性 gradientDirection='toBottom';

</br>
</br>

## 🎊1.0.2

发布时间：2023.3.1

### ✨ Features

- ✨ :【HillChart】:新增山峰图
- ✨ :【TreeChart】:新增树图

</br>
</br>

## 🎊1.0.1

发布时间：2023.2.25

### ✨ Features

- ✨ :【BarChart】:新增堆叠柱状图、瀑布柱状图
