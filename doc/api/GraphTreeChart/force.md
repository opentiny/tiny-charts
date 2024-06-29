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

<p class='ev_expand_introduce'>默认值：<code>10</code>

<p class='ev_expand_introduce'>说明：节点之间的斥力因子,值越大则斥力越大

<p class='ev_expand_title'>force.gravity<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：<code>0.12</code>

<p class='ev_expand_introduce'>说明：节点密集度，可选范围0-1，值越大则节点越密集，节点往中心点靠拢

<p class='ev_expand_title'>force.edgeLength<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array | Number</span>

<p class='ev_expand_introduce'>默认值：<code>[16,28]</code>

<p class='ev_expand_introduce'>说明：两个节点之间的距离，这个距离也会受 <code>force.repulsion</code> 影响。如果是Array格式，symBolSize 大的节点<code>edgeLength</code>越小。

<p class='ev_expand_title'>force.layoutAnimation<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：<code>false</code>

<p class='ev_expand_introduce'>说明：是否显示布局的迭代动画

<p class='ev_expand_title'>force.friction<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：<code>0.05</code>

<p class='ev_expand_introduce'>说明：树图趋近率，为<code>0</code>则显示为树图结构
