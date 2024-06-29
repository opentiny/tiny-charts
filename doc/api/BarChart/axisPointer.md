说明：坐标指示器样式（数据背景区域样式），(支持 rgb 颜色、英文单词颜色、十六进制颜色)

默认值：`{theme === 'dark' ? 'rgba(238,238,238,0.08)' : 'rgba(25,25,25,0.08)'}`

格式：

```d
axisPointer:{
        color:'rgba(49,68,97,.5)',
        gradientColor:['rgba(49,68,97,.5)','rgba(49,68,97,.1)'],
    }
```

<p class='ev_expand_title'>stepGradient.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：坐标指示器颜色。同时存在axisPointer.color与axisPointer.gradientColor属性，以axisPointer.gradientColor属性生效

<p class='ev_expand_title'>stepGradient.gradientColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：坐标指示器渐变色。同时存在axisPointer.color与axisPointer.gradientColor属性，以axisPointer.gradientColor属性生效
