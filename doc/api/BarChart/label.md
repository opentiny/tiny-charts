默认值：

```d
对象形式
label:{
    show:false,
    position:'inside',
    offset:[0,0]
}
```

```d
数组形式
label:[
    {
        show:false,
        position:'inside',
        offset:[0,0]
    },
]
```

说明：柱状图的柱形文本配置<br>
`label='Object'` , 所有的柱形统一配置<br>
`label='Array'` , 可在其内部定义多个样式 ， 按顺序依次对不同名称的柱形进行配置

<p class='ev_expand_title'>label.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：<code>false</code>

<p class='ev_expand_introduce'>说明：柱状图的柱形文本是否显示

<p class='ev_expand_title'>label.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>inside</code>（内部）

<p class='ev_expand_introduce'>可选值：<code>inside</code>（内部） ， <code>top</code>（外部靠顶） ， <code>bottom</code>（外部靠底） ， <code>left</code>（外部靠左） ， <code>right</code>（外部靠右） ， <code>insideLeft</code>（内部靠左） ， <code>insideRight</code>（内部靠右） ， <code>insideTop</code>（内部靠上） ， <code>insideBottom</code>（内部靠底） ， <code>insideTopLeft</code>（内部左上） ， <code>insideBottomLeft</code>（内部左下） ， <code>insideTopRight</code>（内部右上） ， <code>insideBottomRight</code>（内部右下）

<p class='ev_expand_introduce'>说明：柱状图的柱形文本位置

<p class='ev_expand_title'>label.offset<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：<code>[0,0]</code>

<p class='ev_expand_introduce'>说明：柱状图的柱形文本横向及纵向偏移量

<p class='ev_expand_title'>label.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Function</span>

<p class='ev_expand_introduce'>格式：

```css
formatter:params=>{
            if(params.name==='总进尺'){
                if(params.seriesName==='Domestic'){
                    params.value=2120
                    params.data=2120
                }else if(params.seriesName==='Abroad'){
                    params.data=2000
                    params.value=2120
                }
                return params.data+'m'
            }
           return params.data+'t'
        }
```

<p class='ev_expand_introduce'>说明：自定义柱状图的柱形文本信息
