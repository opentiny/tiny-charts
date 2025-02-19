可选值如下：
`non-nested`：非嵌套式：distance默认将为50，data类型必须为一维数组
`non-nested-aggregate`：非嵌套聚合式：distance默认将为5，data类型必须为一维数组
`nested`：嵌套式：distance默认将为5，data类型必须为二维数组；color必须为数组形式，且为16进制

如果用户未定义type，组件会根据data类型，在代码内部进行赋值。