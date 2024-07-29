# 皮肤主题

{{VITE_BASECOPYRIGHTS}} 目前内置了7种皮肤主题色，包括：
- ICT3.0图表浅色主题
- ICT3.0图表深色主题
- 华为云图表浅色主题
- H Design1.1图表浅色主题
- H Design1.1图表深色主题
- 质量&流程IT图表浅色主题
- 质量&流程IT图表深色主题

## 主题切换

您可以通过在图表 option 配置项中的 theme 字段来切换主题。
```jsx
{
  // 'light' 表示ICT3.0图表浅色主题, 默认值
  // 'dark'  表示ICT3.0图表深色主题
  // 'cloud-light' 表示华为云图表浅色主题
  // 'hdesign-light' 表示H Design1.1图表浅色主题
  // 'hdesign-dark' 表示H Design1.1图表深色主题
  // 'bpit-light'  表示质量&流程IT图表浅色主题
  // 'bpit-dark'  表示质量&流程IT图表深色主题
  theme: 'hdesign-light'，
  ...
}
```
## ICT3.0图表主题

<div class="color-demo-container">
    <div class="color-demo-item">
    <img  class="color-demo-img" src="{{VITE_BASEROUTER}}./image/md/themeColorDemoIctLight.png"/>
    <div class="color-demo-label">light</div>
    </div>
    <div class="color-demo-item">
    <img  class="color-demo-img" src="{{VITE_BASEROUTER}}./image/md/themeColorDemoIctDark.png"/>
    <div class="color-demo-label">dark</div>
    </div>
</div>

## 华为云图表主题

<div class="color-demo-container">
    <div class="color-demo-item">
    <img  class="color-demo-img" src="{{VITE_BASEROUTER}}./image/md/themeColorDemoCloudLight.png"/>
    <div class="color-demo-label">cloud-light</div>
    </div>
</div>

## H Design图表主题

<div class="color-demo-container">
    <div class="color-demo-item">
    <img  class="color-demo-img" src="{{VITE_BASEROUTER}}./image/md/themeColorDemoHdesignLight.png"/>
    <div class="color-demo-label">hdesign-light</div>
    </div>
    <div class="color-demo-item">
    <img  class="color-demo-img" src="{{VITE_BASEROUTER}}./image/md/themeColorDemoHdesignDark.png"/>
    <div class="color-demo-label">hdesign-dark</div>
    </div>
</div>

## 质量&流程IT图表主题

<div class="color-demo-container">
    <div class="color-demo-item">
    <img  class="color-demo-img" src="{{VITE_BASEROUTER}}./image/md/themeColorDemoHdesignLight.png"/>
    <div class="color-demo-label">bpit-light</div>
    </div>
    <div class="color-demo-item">
    <img  class="color-demo-img" src="{{VITE_BASEROUTER}}./image/md/themeColorDemoHdesignDark.png"/>
    <div class="color-demo-label">bpit-dark</div>
    </div>
</div>


<style>
.markdown-body ul li{
    font-size:14px;
    font-weight:bold;
    color: #191919;
}
.color-demo-container{
    padding:0 32px;
    display:flex;
    gap:64px;
    margin-bottom:36px;
}
.color-demo-item{
    display:flex;
    flex-direction:column;
    gap:8px;
}
.color-demo-img{
  width:500px;
  height:300px;
}
.color-demo-label{
    font-size:16px;
    font-weight:600;
    text-align:center;
    color:#191919
}
</style>
