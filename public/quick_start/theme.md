# 皮肤主题

HUI-Charts目前内置了5种皮肤主题色，包括：
- ICT3.0图表浅色主题
- ICT3.0图表深色主题
- 华为云图表浅色主题
- 华为云图表深色主题(待定)
- 质量与流程IT浅色主题

## 主题切换

您可以通过在图表 option 配置项中的 theme 字段来切换主题。
```jsx
{
  //'light'为默认值，表示ICT3.0图表浅色主题
  //'dark'          表示ICT3.0图表深色主题
  //'cloud-light' 表示华为云图表浅色主题
  //'cloud-dark'  表示华为云图表深色主题
  //'bpit-light'  表示质量与流程IT浅色主题
  theme: 'light'，
  ...
}
```
## ICT3.0图表浅色主题

- 图表推荐配色

<div class="color-block light1">#6D8FF0</div>
<div class="color-block light2">#00A874</div>
<div class="color-block light3">#BD72F0</div>
<div class="color-block light4">#C6E5EC</div>
<div class="color-block light5">#FDC000</div>
<div class="color-block light6">#9185F0</div>

- 图表状态色

<div class="color-status light1">
  <div class="top">错误色</div>
  <div class="bottom">#F43146</div>
</div>
<div class="color-status light2">
  <div class="top">告警色</div>
  <div class="bottom">#EC6F1A</div>
</div>
<div class="color-status light3">
  <div class="top">次要告警</div>
  <div class="bottom">#EEBA18</div>
</div>
<div class="color-status light4">
  <div class="top">成功色</div>
  <div class="bottom">#2DA769</div>
</div>
<div class="color-status light5">
  <div class="top">提示色</div>
  <div class="bottom">#5990FD</div>
</div>
<div class="color-status light6">
  <div class="top">失效色</div>
  <div class="bottom">#939393</div>
</div>

## ICT3.0图表深色主题

- 图表推荐配色

<div class="color-block dark1">#1F55B5</div>
<div class="color-block dark2">#278661</div>
<div class="color-block dark3">#8A21BC</div>
<div class="color-block dark4">#26616B</div>
<div class="color-block dark5">#B98C1D</div>
<div class="color-block dark6">#745EF7</div>

- 图表状态色

<div class="color-status dark1">
  <div class="top">错误色</div>
  <div class="bottom">#F43146</div>
</div>
<div class="color-status dark2">
  <div class="top">告警色</div>
  <div class="bottom">#EC6F1A</div>
</div>
<div class="color-status dark3">
  <div class="top">次要告警</div>
  <div class="bottom">#EEBA18</div>
</div>
<div class="color-status dark4">
  <div class="top">成功色</div>
  <div class="bottom">#0D9458</div>
</div>
<div class="color-status dark5">
  <div class="top">提示色</div>
  <div class="bottom">#5990FD</div>
</div>
<div class="color-status dark6">
  <div class="top">失效色</div>
  <div class="bottom">#818181</div>
</div>

## 华为云图表浅色主题

- 图表推荐配色

<div class="color-block light7">#1476FF</div>
<div class="color-block light8">#0BB8B2</div>
<div class="color-block light9">#6E51E0</div>
<div class="color-block light10">#5CB300</div>
<div class="color-block light11">#FCBE1E</div>
<div class="color-block light12">#33BCF2</div>
<div class="color-block light13">#BA53E6</div>
<div class="color-block light14">#EB4696</div>

- 图表状态色

<div class="color-status light7">
  <div class="top">错误色</div>
  <div class="bottom">#F23030</div>
</div>
<div class="color-status light8">
  <div class="top">告警色</div>
  <div class="bottom">#FF8800</div>
</div>
<div class="color-status light9">
  <div class="top">次要告警</div>
  <div class="bottom">#F7D916</div>
</div>
<div class="color-status light10">
  <div class="top">成功色</div>
  <div class="bottom">#5CB300</div>
</div>
<div class="color-status light11">
  <div class="top">提示色</div>
  <div class="bottom">#1476FF</div>
</div>
<div class="color-status light12">
  <div class="top">失效色</div>
  <div class="bottom">#EBEBEB</div>
</div>

## 华为云图表深色主题(待定)

- 图表推荐配色

<div class="color-block dark1">#1F55B5</div>
<div class="color-block dark2">#278661</div>
<div class="color-block dark3">#8A21BC</div>
<div class="color-block dark4">#26616B</div>
<div class="color-block dark5">#B98C1D</div>
<div class="color-block dark6">#745EF7</div>

- 图表状态色

<div class="color-status dark1">
  <div class="top">错误色</div>
  <div class="bottom">#F43146</div>
</div>
<div class="color-status dark2">
  <div class="top">告警色</div>
  <div class="bottom">#EC6F1A</div>
</div>
<div class="color-status dark3">
  <div class="top">次要告警</div>
  <div class="bottom">#EEBA18</div>
</div>
<div class="color-status dark4">
  <div class="top">成功色</div>
  <div class="bottom">#0D9458</div>
</div>
<div class="color-status dark5">
  <div class="top">提示色</div>
  <div class="bottom">#5990FD</div>
</div>
<div class="color-status dark6">
  <div class="top">失效色</div>
  <div class="bottom">#818181</div>
</div>

<!-- 样式 -->
<style>
.color-block{
    display:inline-block;
    width:85px;
    height:85px;
    border-radius:2px;
    margin:0 20px 16px;
    color:#fff;
    padding-left: 8px;
    padding-top:62px;
    font-size:12px;
}
.color-block.light1{
    background:#6d8ff0;
}
.color-block.light2{
    background:#00a874;
}
.color-block.light3{
    background:#bd72f0;
}
.color-block.light4{
    background:#c6e5ec;
}
.color-block.light5{
    background:#fdc000;
}
.color-block.light6{
   background:#9185f0;
}
.color-block.light7{
   background:#1476FF;
}
.color-block.light8{
   background:#0BB8B2;
}
.color-block.light9{
   background:#6E51E0;
}
.color-block.light10{
   background:#5CB300;
}
.color-block.light11{
   background:#FCBE1E;
}
.color-block.light12{
   background:#33BCF2;
}
.color-block.light13{
   background:#BA53E6;
}
.color-block.light14{
   background:#EB4696;
}
.color-block.dark1{
   background:#1f55b5;
}
.color-block.dark2{
   background:#278661;
}
.color-block.dark3{
   background:#8a21bc;
}
.color-block.dark4{
   background:#26616b;
}
.color-block.dark5{
   background:#b98c1d;
}
.color-block.dark6{
   background:#745ef7;
}
.color-status{
    display:inline-block;
    width:85px;
    height:85px;
    border-radius:2px;
    margin:0 20px 46px;
    color:#fff;
    position:relative;
    font-size:12px;
}
.color-status .top{
    position:absolute;
    right:8px;
    top:6px;
}
.color-status .bottom{
    position:absolute;
    left:8px;
    bottom:6px;
}
.color-status.light1{
    background:#F43146;
}
.color-status.light2{
    background:#EC6F1A;
}
.color-status.light3{
    background:#EEBA18;
}
.color-status.light4{
    background:#2DA769;
}
.color-status.light5{
    background:#5990FD;
}
.color-status.light6{
    background:#939393;
}
.color-status.light7{
    background:#F23030;
}
.color-status.light8{
    background:#FF8800;
}
.color-status.light9{
    background:#F7D916;
}
.color-status.light10{
    background:#5CB300;
}
.color-status.light11{
    background:#1476FF;
}
.color-status.light12{
    background:#EBEBEB;
    color:#191919;
}
.color-status.dark1{
    background:#F43146;
}
.color-status.dark2{
    background:#EC6F1A;
}
.color-status.dark3{
    background:#EEBA18;
}
.color-status.dark4{
    background:#0D9458;
}
.color-status.dark5{
    background:#5990FD;
}
.color-status.dark6{
    background:#818181;
}
.markdown-body ul li{
    font-size:14px;
    font-weight:bold;
    color: #191919;
}
</style>
