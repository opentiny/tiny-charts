格式：

```d
sort: {
    field: 'value',     // 排序字段：'value' 或 'percent'
    order: 'desc'       // 排序顺序：'asc' 升序, 'desc' 降序, 'none' 不排序
}
```

说明：排序配置，用于控制图表数据的排序方式。支持按数值(value)和百分比(percent)两种字段进行升序、降序或不排序。

完整配置格式：
```d
{
    field: 'value',     // 必需，排序字段，可选值：'value', 'percent'
    order: 'desc'       // 必需，排序顺序，可选值：'asc', 'desc', 'none'
}
```