# 数据状态

{{VITE_BASECOPYRIGHTS}} 目前内置了 5 种数据状态，包括：

- 数据加载中
- 数据加载失败
- 数据为空
- 阶段数据为空
- 自定义状态

## 数据加载中

图表在加载任务数据时的状态：<br>


<div class="img-warpper">
    <div class="img-container">
        <img src="{{VITE_BASEROUTER}}./image/md/loading.png"/>
    </div>
    <div class="img-container img-container-dark">
        <img src="{{VITE_BASEROUTER}}./image/md/loadingDark.png"/>
    </div>
</div>

```jsx
// 开启loading
let option = { theme: 'hdesign-light' };
chartInstance.showLoading(option);

// 关闭loading
chartInstance.closeLoading();
```

### showLoading方法参数
| 参数 | 说明 | 类型 | 默认值
| :--- | :--- | :--- | :--- |
| theme | 选择主题，支持七种主题：`"light"`，`"dark"`，`"cloud-light"`，`"hdesign-light"`，`"hdesign-dark"`，`"bpit-light"`，`"bpit-dark"` | string | `"light"` |
| text | 数据加载时的文本内容 | string | `"加载中..."` |
| textSize | 数据加载时的文本大小 | number | `14` |
| textColor | 数据加载时的文本颜色 | string | `"#808080"` |
| textShow | 是否显示文本 | boolean | `true` |
| image | 数据加载时的图标 | string | - |
| imageSize | 数据加载时的图标尺寸 | number | `24` |
| imageColor | 数据加载时的图标颜色 | string | `"#191919"` |
| imageShow | 是否显示图标 | boolean | `true` |
| backgroundColor | 数据加载时的背景底色 | string | `"#FFFFFF"` |

<br/>
<br/>

## 数据加载失败

图表数据加载失败时的状态：<br>

<div class="img-warpper">
    <div class="img-container">
        <img src="{{VITE_BASEROUTER}}./image/md/error.png"/>
    </div>
    <div class="img-container img-container-dark">
        <img src="{{VITE_BASEROUTER}}./image/md/errorDark.png"/>
    </div>
</div>

```jsx
// 显示错误状态
let option = { theme: 'hdesign-light' };
chartInstance.showError(option);

// 关闭错误状态
chartInstance.closeError();
```

### showError方法参数
| 参数 | 说明 | 类型 | 默认值
| :--- | :--- | :--- | :--- |
| theme | 选择主题，支持七种主题：`"light"`，`"dark"`，`"cloud-light"`，`"hdesign-light"`，`"hdesign-dark"`，`"bpit-light"`，`"bpit-dark"` | string | `"light"` |
| text | 数据错误时的文本内容 | string | `"加载失败"` |
| textSize | 数据错误时的文本大小 | number | `14` |
| textColor | 数据错误时的文本颜色 | string | `"#808080"` |
| textShow | 是否显示文本 | boolean | `true` |
| image | 数据错误时的图标 | string | - |
| imageSize | 数据错误时的图标尺寸 | number | `80` |
| imageColor | 数据错误时的图标颜色 | string | `"#191919"` |
| imageShow | 是否显示图标 | boolean | `true` |
| backgroundColor | 数据错误时的背景底色 | string | `"#FFFFFF"` |

<br/>
<br/>

## 数据为空

数据为空主要是指图表未加载任务数据，显示无数据状态：<br>

<div class="img-warpper">
    <div class="img-container">
        <img class="img" src="{{VITE_BASEROUTER}}./image/md/empty.png"/>
    </div>
    <div class="img-container img-container-dark">
        <img class="img" src="{{VITE_BASEROUTER}}./image/md/emptyDark.png"/>
    </div>
</div>

```jsx
// 显示空数据状态
let option = { theme: 'hdesign-light' };
chartInstance.showEmpty(option);

// 关闭空数据状态
chartInstance.closeEmpty();
```

### showEmpty方法参数
| 参数 | 说明 | 类型 | 默认值
| :--- | :--- | :--- | :--- |
| theme | 选择主题，支持七种主题：`"light"`，`"dark"`，`"cloud-light"`，`"hdesign-light"`，`"hdesign-dark"`，`"bpit-light"`，`"bpit-dark"` | string | `"light"` |
| text | 空数据时的文本内容 | string | `"暂无数据"` |
| textSize | 空数据时的文本大小 | number | `14` |
| textColor | 空数据时的文本颜色 | string | `"#808080"` |
| textShow | 是否显示文本 | boolean | `true` |
| image | 空数据时的图标 | string | - |
| imageSize | 空数据时的图标尺寸 | number | `80` |
| imageColor | 空数据时的图标颜色 | string | `"#191919"` |
| imageShow | 是否显示图标 | boolean | `true` |
| backgroundColor | 空数据时的背景底色 | string | `"#FFFFFF"` |

<br/>
<br/>

## 阶段数据为空

阶段数据为空主要是指图表在所选时间段内显示无数据状态：<br>

<div class="img-warpper">
    <div class="img-container">
        <img class="img" src="{{VITE_BASEROUTER}}./image/md/stageEmpty.png"/>
    </div>
    <div class="img-container img-container-dark">
        <img class="img" src="{{VITE_BASEROUTER}}./image/md/stageEmptyDark.png"/>
    </div>
</div>


```jsx
// 显示阶段空数据状态
let option = { theme: 'hdesign-light' };
chartInstance.showStageEmpty(option);

// 关闭阶段空数据状态
chartInstance.closeStageEmpty();
```

### showStageEmpty方法参数
| 参数 | 说明 | 类型 | 默认值
| :--- | :--- | :--- | :--- |
| theme | 选择主题，支持七种主题：`"light"`，`"dark"`，`"cloud-light"`，`"hdesign-light"`，`"hdesign-dark"`，`"bpit-light"`，`"bpit-dark"` | string | `"light"` |
| text | 阶段空数据时的文本内容 | string | `"没有符合所选时间内的数据"` |
| textSize | 阶段空数据时的文本大小 | number | `14` |
| textColor | 阶段空数据时的文本颜色 | string | `"#808080"` |
| textShow | 是否显示文本 | boolean | `true` |
| image | 阶段空数据时的图标 | string | - |
| imageSize | 阶段空数据时的图标尺寸 | number | `80` |
| imageColor | 阶段空数据时的图标颜色 | string | `"#191919"` |
| imageShow | 是否显示图标 | boolean | `true` |
| backgroundColor | 阶段空数据时的背景底色 | string | `"#FFFFFF"` |

<br/>
<br/>

## 自定义状态

当上述 4 种数据状态无法满足您的需求场景时，您可以使用自定义状态方法，但需要您传入图片和文本:<br>

<div class="img-warpper">
    <div class="img-container">
        <img class="img" src="{{VITE_BASEROUTER}}./image/md/custom.png"/>
    </div>
    <div class="img-container img-container-dark">
        <img class="img" src="{{VITE_BASEROUTER}}./image/md/customDark.png"/>
    </div>
</div>

```jsx
// 显示自定义状态
let option = {
    theme: 'hdesign-light',
    text: '自定义文本',
    image: './image/assets/xx.png',
}
chartInstance.showState(option);

// 关闭自定义状态
chartInstance.closeState();
```

### showState方法参数
| 参数 | 说明 | 类型 | 默认值
| :--- | :--- | :--- | :--- |
| theme | 选择主题，支持七种主题：`"light"`，`"dark"`，`"cloud-light"`，`"hdesign-light"`，`"hdesign-dark"`，`"bpit-light"`，`"bpit-dark"` | string | `"light"` |
| text | 自定义文本内容 | string | - |
| textSize | 自定义文本大小 | number | `14` |
| textColor | 自定义文本颜色 | string | `"#808080"` |
| textShow | 是否显示文本 | boolean | `true` |
| image | 自定义图标 | string | - |
| imageSize | 自定义图标尺寸 | number | `"auto"` |
| imageColor | 自定义图标颜色 | string | `"#191919"` |
| imageShow | 是否显示图标 | boolean | `true` |
| backgroundColor | 自定义背景底色 | string | `"#FFFFFF"` |


<br/>
<br/>


## 自定义DOM

当上述所有内置的数据状态无法满足您的需求场景时，您可以使用自定义DOM，创建您所需要的数据状态:<br>

```javascript
// 下述代码为展示示例，用户可以自行根据场景创建内容
chartInstance.showCustomDom(function (container) {
    // 传入自定义DOM，container 为数据状态的DOM容器
    let customContainer = document.createElement('div');
    customContainer.className = 'huicharts-custom-state';
    customContainer.innerHTML = '重新加载';
    container.appendChild(customContainer);
})

// 关闭自定义DOM
chartInstance.closeCustomDom();
```

<style>
    .img-warpper{
        width: 650px;
        margin: auto;
        display: flex;
        margin-top: 16px;
        margin-bottom: 16px;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
    .img-container{
        border:1px solid var(--ti-base-color-common-1);
        position:relative;
        margin:0 auto;
        width: 300px;
        height:180px;
        display:inline-flex;
        justify-content:center;
        align-items:center;
    }
    .img-container-dark{
        background-color:#191919;
    }
</style>
