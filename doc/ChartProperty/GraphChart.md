<title>

## 配置项说明

</title>

<api>
<name>theme</name>
<introduce>主题</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`light`

可选值： `light` , `dark`

说明：图表主题 ， 共有黑白两套主题
</api>

<api>
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
data: [
  {
    name:'Z',children:[
      {name:'A',children:[
        {name:'A1',children:[]},
        {name:'A2',children:[]}
      ]},
      {name:'B',children:[
        {name:'B1',children:[]},
        {name:'B2',children:[]}
      ]}
    ]
  },
  {
    name:'Z',children:[
      {name:'C',children:[
        {name:'C1',children:[
          {name:'C1-1',children:[
            {name:'C1-1-1',children:[]},
            {name:'C1-1-2',children:[]}
          ]}
        ]},
      ]},
    ]
  }
  ...
];
```

说明：图表数据 ，`data` 是树结构数据的集合，`data` 中每个子对象都是从根节点开始，呈树结构排列。 `name` 为当前节点名，`children` 为其子节点集合
</api>

<api>
<name>chartPosition</name>
<introduce>图表位置</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`['center','center']`

说明：图表位置，第一个值设置图表 `top` 值，第二个值设置图表 `left` 值。支持百分比、数值、方位名词

</api>

<api>
<name>event</name>
<introduce>图表事件</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
 event:{
    series：{
      click:(parms)=>{
        ...
      },
      mousemove:(params)=>{
        ...
      },
      ...
    },
    ....
    }
```

说明：自定义设置图表的处理事件,具体用法参考<a href="https://echarts.apache.org/zh/api.html#echartsInstance.on">https://echarts.apache.org/zh/api.html#echartsInstance.on</a>

</api>

<api>
<name>categories</name>
<introduce>设置节点样式</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
// 根节点样式
    {
      symbol: 'circle',
      symbolSize: 12,
      itemStyle: {
        color: '#dfba3f',
      },
    },
// 子节点样式
    {
      symbol: 'circle',
      symbolSize: 12,
      itemStyle: {
        color: theme === 'light' ? '#939393' : '#ddd',
      },
    },
// 虚拟节点样式(实例中方形小黄块)
    {
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGRJREFUSEtjZBggwDhA9jKMWky3kB8N6tGgplkIEJ247u+y/0+MKxTdDhJlJlGKQBaOWowr2EeDGlfIjCYunFl15GUnYkotUtQQnbhIMZQYtaMWExNKVFEzGtRUCUZiDBl5QQ0AkpooH6Q8aKIAAAAASUVORK5CYII=',
      symbolSize: 20,
      itemStyle: {
        color: '#dfba3f',
      },
    },
```

说明：设置节点样式，顺序不可颠倒，且 `length` 至少为 `3`。如果某个部分不需要调整，在对应位置写`{}`。<br>
索引为 0-----根节点样式<br>
索引为 1-----全部子节点样式<br>
索引为 length-1-----虚拟节点样式（默认为方形小黄块），正常虚拟节点和箭头之间是有一点间隙的，箭头和虚拟节点都是 path 路径实现的，且虚拟节点的 symbolSize 为 20。如果需要调整虚拟节点的 symbolSize 和 symbol，箭头可能也要进行修正.
</api>

<api>
<name>force</name>
<introduce>设置力引导布局</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
force:{
      repulsion: 10,
      gravity: 0.12,
      edgeLength: [16,28],
      layoutAnimation: false,
      friction: 0.05,
    },
```

说明：力引导布局相关的配置项，`repulsion`设置节点间的斥力。`gravity`设置节点密集度。`edgeLength`设置节点距离。
`layoutAnimation`布局迭代动画是否开启。`friction`树图趋近率。

<p class='ev_expand_title'>force.repulsion<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`10`

<p class='ev_expand_introduce'>说明：节点之间的斥力因子,值越大则斥力越大

<p class='ev_expand_title'>force.gravity<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0.12`

<p class='ev_expand_introduce'>说明：节点密集度，可选范围0-1，值越大则节点越密集，节点往中心点靠拢

<p class='ev_expand_title'>force.edgeLength<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array | Number</span>

<p class='ev_expand_introduce'>默认值：`[16,28]`

<p class='ev_expand_introduce'>说明：两个节点之间的距离，这个距离也会受 `force.repulsion` 影响。如果是Array格式，symBolSize 大的节点`edgeLength`越小。

<p class='ev_expand_title'>force.layoutAnimation<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：是否显示布局的迭代动画

<p class='ev_expand_title'>force.friction<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0.05`

<p class='ev_expand_introduce'>说明：树图趋近率，为`0`则显示为树图结构
</api>

<api>
<name>edgeSymbol</name>
<introduce>设置节点连线符号</introduce>
<type>Array | String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
// 亮色箭头 #939393
const lightArrow =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAoCAYAAADDo7u9AAAAAXNSR0IArs4c6QAAAWhJREFUOE+F0k1uwkAMBeBxsotUrlGOUY5RtlmSjCKVYxQpys8yWzhGOQZcA6TsEld+ikdWmahsUJgnP/NlyJnPMAxv8pjn+VN/Jhuo6/pdnququkcDbdt+yEFZltdooO/7Tzk4HA6XaKBpmi858N6fooGu677loCiK49qE8zJhv7bkz7Lkbq3itlRs1yoeS8XmJSCK4zgikGXZRjWDpCimaYqKaZq2qhkCiyKWdM7tVDMERHGeZ/zNJEn2qhkCokhEgGLmo2qGgCgyM6iJ6KSadsKZiPCymPnivYemXVIWxOt2zl3LsoSmrbgxMy4MEd2LooCmrXgQEa4cMz+999BEwCoqsWoiYBU1oJoI/FHUDDQRsIp6qpoIWEUNqCYCVjHcg0VTJwRFMwGauqRV1Aw0tSIomgpoakVQNBXQpJii1aSYotWkFcWgSTFFq0kxRatJMUWrKRNeFK2mLBlTDJoSYH2Kff8b+AXnbeyqFFaSkgAAAABJRU5ErkJggg==';

// 暗色箭头 #dddddd
const darkArrow =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAoCAYAAADDo7u9AAAAAXNSR0IArs4c6QAAAVtJREFUOE+F0s1tg0AQhmE+7uFGAcBKcRlxGXYbdhlxG3YZdhmxxE8BvuE7E82nndUoLAoXBPtqx34WFO56vV4f+ljX9dtewwfjOH7qc9u2z2wwTdOXLjRN89gKDjG4bY04xRGXbND3/bcuhBDOW8E1Bset4B6DfTYYhuFHF7qu223tMMcdqlWgivM8M6iqqjLNJKmKIsIRAHammQJVXJaFP7Isy71p+uCwLAv/ZlmWx6ZpqOlHnESEUADObdtSMwWqCIDUInIxTR9cAfCwROQWQqCmD+4AeNwi8gghUDMFUZEfTFEUT9P0O8wA+MmJyDuEQE0GXtGITZOBV0xnEDUZeEULTNOCpOgCatqIpOhGUJOBV7TANC1Iii6gpgVJ0QXUZPBH0Rpq2g5J0e1ATeQUvSZyil4TOUWvqcFK0WvqiJWi10RO0WtqsFL0mhqsFL0mhmEQe5G7/xv8AiXLAYACDjIWAAAAAElFTkSuQmCC';

const arrow=theme==='light'?lightArrow:darkArrow
edgeSymbol:`[arrow,'none']`
```

可选值： `none` , `arrow`

说明：设置节点连线符号，索引为 0---子节点指向父节点符号；索引为 1---父节点指向子节点符号
</api>

<api>
<name>lineStyle</name>
<introduce>设置节点连线样式</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
 lineStyle={
   width: 1,
   type: 'solid',
   color: theme === 'light' ? '#939393' : '#dddddd',
   opacity: 1,
 }
```

说明：设置节点连线样式,`width`设置线条宽度，`type`设置线条类型，`color`设置线条颜色，`opacity`设置线条透明度

<p class='ev_expand_title'>lineStyle.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`1`

<p class='ev_expand_introduce'>说明：设置线条宽度

<p class='ev_expand_title'>lineStyle.type<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`solid`

<p class='ev_expand_introduce'>说明：设置线条类型

<p class='ev_expand_title'>lineStyle.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`#939393||#dddddd`

<p class='ev_expand_introduce'>说明：设置线条颜色

<p class='ev_expand_title'>lineStyle.opacity<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`1`

<p class='ev_expand_introduce'>说明：设设置线条透明度
</api>
