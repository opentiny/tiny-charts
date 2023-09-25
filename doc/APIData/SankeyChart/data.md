格式：

```d
data:{
    nodes:[
        {name:'a',value:70},
        {name:'b',value:50},
        {name:'c',value:20},
        ...
    ],
    links:[
        {source:'a',target:'b',value:50},
        {source:'a',target:'c',value:20},
        ...
    ]
}
```

说明：图表数据 ， `nodes` 为页面节点数据 ， `links` 为页面节点之间的连接关系数据

<p class='ev_expand_title'>data.nodes<span class='ev_expand_required'>必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>格式：
```css
nodes:[
        {name:'a',value:70},
        {name:'b',value:50},
        {name:'c',value:20},
        ...
    ],
```

<p class='ev_expand_introduce'>说明：页面节点数据 ； `name` 为节点名称 ， `value` 为节点的数据值 ， 未定义 `value` 则默认为 0

<p class='ev_expand_title'>data.links<span class='ev_expand_required'>必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>格式：
```css
 links:[
        {source:'a',target:'b',value:50},
        {source:'a',target:'c',value:20},
        ...
    ]
```

<p class='ev_expand_introduce'>说明：页面节点之间的连接关系数据 ； `source` 为节点起点 ， `target` 为节点终点 ， `value` 为节点间传递的数据值
