# 皮肤主题

{{VITE_BASECOPYRIGHTS}} 目前内置了8种皮肤主题色，包括：

- ICT3.0图表浅色主题：`light`
- ICT3.0图表深色主题：`dark`
- 华为云图表浅色主题：`cloud-light`
- 华为云图表深色主题：`cloud-dark`
- H Design1.1图表浅色主题：`hdesign-light`
- H Design1.1图表深色主题：`hdesign-dark`
- 质量&流程IT图表浅色主题：`bpit-light`
- 质量&流程IT图表深色主题：`bpit-dark`

# 主题切换

✨：`1.3.22`版本，新增`Theme`工具类，支持全局主题相关的能力

```jsx
当前支持api

// 获取{{VITE_BASECOPYRIGHTS}}支持的主题字段
Theme.THEMES

// 全局设置主题
Theme.init(themeName)

// 全局切换主题
Theme.set(themeName)

// 获取对应主题的token色值
Theme.getColors()
```

## 获取{{VITE_BASECOPYRIGHTS}}支持的主题字段

```jsx
// ICT3.0图表浅色主题
Theme.THEMES.LIGHT
// ICT3.0图表深色主题
Theme.THEMES.DARK
// 华为云图表浅色主题
Theme.THEMES.CLOUD_LIGHT
// 华为云图表深色主题
Theme.THEMES.CLOUD_DARK
// H Design1.1图表浅色主题
Theme.THEMES.HDESIGN_LIGHT
// H Design1.1图表深色主题
Theme.THEMES.HDESIGN_DARK
// 质量&流程IT图表浅色主题
Theme.THEMES.BPIT_LIGHT
// 质量&流程IT图表深色主题
Theme.THEMES.BPIT_DARK
```

## 设置主题

### 1.旧版本

您可以通过在图表 option 配置项中的 theme 字段来设置主题。

```jsx
const  chartOption = {
  // 'light' 表示ICT3.0图表浅色主题, 默认值
  // 'dark'  表示ICT3.0图表深色主题
  // 'cloud-light' 表示华为云图表浅色主题
  // 'cloud-dark' 表示华为云图表深色主题
  // 'hdesign-light' 表示H Design1.1图表浅色主题
  // 'hdesign-dark' 表示H Design1.1图表深色主题
  // 'bpit-light'  表示质量&流程IT图表浅色主题
  // 'bpit-dark'  表示质量&流程IT图表深色主题
  theme: 'hdesign-light'，
  ...other
}
```

### 2.新版本

您可以使用`Theme.init(themeName)`全局统一设置主题
themeName可选值为当前{{VITE_BASECOPYRIGHTS}} 支持的主题

```jsx
// 全局调用一次
import { Theme } from '{{VITE_BASECOPYRIGHTSPAT}}';
Theme.init('hdesign-light')

// 单个图表实例
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';
const  chartIns = new HuiCharts();
const  chartType = 'LineChart';
// chartOption中无需再传theme字段
const  chartOption = {
   ...other
};
const  chartContainerDom = document.getElementById('main');
chartIns.init(chartContainerDom);
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```

## 切换主题

### 1.旧版本

```jsx
// 变更配置项中的theme字段，重新刷新视图
const option = {
    theme:'hdesign-light',
    ...other
}
const newOption = {
    theme:'hdesign-dark', 
    ...other
}
chartIns.refresh(newOption)
```

### 2.新版本

使用`Theme.set(themeName)`
此方法需要保证在页面图表渲染完成之后调用

```jsx
// 页面渲染完成的图表
// 图表1
const  chartIns1 = new HuiCharts();
...
chartIns1.render()
// 图表2
const  chartIns2 = new HuiCharts();
...
chartIns2.render()
// 图表3
const  chartIns3 = new HuiCharts();
...
chartIns3.render()
// 图表4
const  chartIns4 = new HuiCharts();
...
chartIns4.render()

// 全局调用一次即可实现主题切换
import { Theme } from '{{VITE_BASECOPYRIGHTSPAT}}';
Theme.set('hdesign-dark')
// cloud个别服务无须调用，平台自动适配
```

## 使用色值常量

通过`Theme.getColors()`获取，返回Proxy对象，使用时不用二次获取，颜色字段随主题自动更新。

```jsx
// 使用方式
import { Theme } from '{{VITE_BASECOPYRIGHTSPAT}}';
const  themeColors = Theme.getColors()
const option = {
    theme: 'hdesign-light',
    padding: [50, 30, 54, 20],
    smooth: true,
    tooltip: {
        formatter: (params, ticket, callback) => {
            let htmlString = '';
            params.forEach((item, index) => {
                if (index === 0) {
                    htmlString += (item.name + '<br/>');
                }
                htmlString +=
                    '<div>' +
                    `<span style="width:10px;display:inline-block;height:10px;border-radius:5px; background-color:${themeColors.group[index]};"></span>` +
                    '<span style="margin-left:5px;>' +
                    `<span style="width:100px;display:inline-block;color:${themeColors.textSecondary}">${item.seriesName}User</span>`+'</span>'+'</div>';
            });
            return htmlString
        }
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 31 },
        { 'Month': 'Feb', 'Domestic': 27 },
        ...
    ]
};

```

目前暴露的颜色值

```jsx
const themeColors = Theme.getColors()
themeColors = {
    // 图表内置配色组
    group,
    // 数据状态色
    error,
    alert,
    warning,
    success,
    info,
    none,
    // 告警色
    alarmFatal,
    alarmError,
    alarmWarning,
    alarmSecondary,
    alarmOrdinary,
    // 文本色
    textPrimary,
    textSecondary,
    textPlaceholder,
    textDisabled
}

```

## 主题概览

<div class="theme-view-wrapper">
    <div>
    <div class='theme-name'>ICT3.0图表主题</div>
    <img  class='theme-img' src="{{VITE_BASEROUTER}}./image/md/theme/ict-light.png"/>
    <img  class='theme-img' src="{{VITE_BASEROUTER}}./image/md/theme/ict-dark.png"/>
    </div>
     <div>
    <div class='theme-name'>华为云图表主题</div>
    <img  class='theme-img' src="{{VITE_BASEROUTER}}./image/md/theme/cloud-light.png"/>
    <img  class='theme-img' src="{{VITE_BASEROUTER}}./image/md/theme/cloud-dark.png"/>
    </div>
</div>

<div class="theme-view-wrapper">
    <div>
    <div class='theme-name'>H Design1.1图表主题</div>
    <img  class='theme-img' src="{{VITE_BASEROUTER}}./image/md/theme/hdesign-light.png"/>
    <img  class='theme-img' src="{{VITE_BASEROUTER}}./image/md/theme/hdesign-dark.png"/>
    </div>
     <div>
    <div class='theme-name'>质量&流程IT图表主题</div>
    <img  class='theme-img' src="{{VITE_BASEROUTER}}./image/md/theme/bpit-light.png"/>
    <img  class='theme-img' src="{{VITE_BASEROUTER}}./image/md/theme/bpit-dark.png"/>
    </div>
</div>

<style>

.theme-img{
    width:300px;
    height:200px;
}
.theme-view-wrapper{
    width:100%;
    display:flex;
    gap:64px;
}

.theme-name {
    color: var(--ti-base-color-common-7);
    font-size:14px;
    padding:8px 0;
    font-weight:600;
}
</style>
