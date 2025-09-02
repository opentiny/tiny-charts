格式：

```d
data:[
    { name:'项目A', value:85, percent:85, content:'项目A详细信息' },
    { name:'项目B', value:72, percent:72, content:'项目B详细信息' },
    { name:'项目C', value:96, percent:96, content:'项目C详细信息' },
    ...
]
```

说明：图表数据，name 为横向进度条名称，value 为数值，percent 为百分比进度(0-100)，content 为鼠标悬浮显示的详细信息(可选)，color 为自定义颜色(可选)

完整数据项格式：
```d
{
    name: 'string',     // 必需，显示名称
    value: 'number',    // 必需，数值
    percent: 'number',  // 必需，百分比（0-100）
    color: 'string',    // 可选，自定义颜色，覆盖默认颜色
    content: 'string'   // 可选，鼠标悬浮时显示的详细信息
}
```