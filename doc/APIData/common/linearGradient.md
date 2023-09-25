说明：线性渐变，循环取色(支持 rgb 颜色、英文单词颜色、十六进制颜色)，渐变方向由左向右

格式：

```d
linearGradient:{
        initialColor:['blue','yellow'],
        endColor:['red','#fff'],
    }
```

<p class='ev_expand_title'>linearGradient.initialColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：起始颜色，循环取色。当此属性未配置时则从color属性中循环取色

<p class='ev_expand_title'>linearGradient.endColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：末尾颜色，循环取色。当此属性未配置时则从color属性中循环取色
