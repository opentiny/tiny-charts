格式：

```d
centerDom: () => {
  const waveDom = `
    <div class="wave_center_content">
      <div class="wave_mainText">
        <span class="wave_value" style="font-size:72px;">96</span>
        <span class="wave_unit" style="font-size:12px;">分</span>
      </div>
      <div class="wave_subText" style="font-size:12px;">健康评分</div>
    </div>
        `;
  return waveDom;
}

```

说明：自定义中心dom的内容，用户可通过自行配置style样式进行大小颜色等设置。如需字体大小自适应，开发者可通过配置`adaptive: true`实现内置的自适应规范（注：需要使用示例里面的div格式）。
用户也可以使用媒体查询进行自定义设置。