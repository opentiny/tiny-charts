说明：分段渐变，可在内部配置多个对象，循环取色(支持 rgb 颜色、英文单词颜色、十六进制颜色)

格式：

```d
stepGradient:[
        {
            step:[0,10,20,30,40,50],
            gradientColor:['pink','yellow','blue','red','#ffffff','#000000']
        },
        /** {
            step:[0,10,20,30,40],
            gradientColor:['yellow','red','gray','green','#cccccc']
        }*/
    ]
```

<p class='ev_expand_title'>stepGradient.step<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：分段区域（对应的data数据中最大值不得超出step的最大值,最小值不得小于step的最小值）

<p class='ev_expand_title'>stepGradient.gradientColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：分段区域的颜色。step数组与对应gradientColor数组长度需一致
