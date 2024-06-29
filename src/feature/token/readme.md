### globalToken: 基础变量，包含基础字号、间距、颜色等等
图表使用的全局变量，包含 font，border，color，space 等

### aliasToken：二层变量，讲基础变量稍微语义化，如初级文本、次级文本，抹平黑白主题差异
基于 globalToken 衍生的别名变量，取值从 globalToken 中取，实现黑白主题的色值切换和不同主题之间的差异

### modelToken：三层变量，由二层变量生成，公共模块化变量，如x轴、y轴、图例、datazoom样式
基于 aliasToken 衍生的三级变量，取值从 aliasToken 中取，实现不同主题之间的差异覆盖

### chartsToken：四层变量，由二层变量生成，各图表变量，如线型图、柱状图样式
目前是基于 globalToken，aliasToken，modelToken 衍生的变量，用于按照图表名称的具体 option 配置
