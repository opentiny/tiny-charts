格式：

```d
markPoint: {
    '图例一': [10, 8],
  };
```
<p class='ev_expand_title'>markPoint<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span>

<p class='ev_expand_introduce'>说明：设置<code>阈值样式的临界点</code>

<p class='ev_expand_introduce'>[10, 8]，数组长度为<code>2</code>时，数据点的维度x>10&&维度y>8,该点为红色样式，红点集中在一个区域内
<p class='ev_expand_introduce'>[0, 0,7]，数组长度为<code>3</code>时，建议x和y都给0，红点的样式，由第三个参数决定，红点为离散型分布
