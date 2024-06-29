格式：

```javascript
// 参数：container 为节点容器
// 参数：data 为节点数据
// 参数：state 为节点不用状态
render: (container, data, state) => {
        let node = '';
        if(state.boss){ // 关系图中心点
            node = `<div class='workshop_icon'>
                        <div class='workshop_head_icon'>
                            <img src='./image/charts/workshop/18.png'>
                        </div>
                    </div>`;
        }else if(state.selected){ // 被选中
            node = `<div class='workshop_icon'>
                        <div class='workshop_name_icon'>${data.name}</div>
                        <div class='workshop_head_icon'>
                            <img src='./image/charts/workshop/13.png'>
                        </div>
                    </div>`;
        }else if(state.prevSelected){ // 拖拽过程中临时选中单位
            node = `<div class='workshop_icon workshop_icon_temp'>
                        <div class='workshop_name_icon'>${data.name}</div>
                        <div class='workshop_head_icon'>
                            <img src='./image/charts/workshop/13.png'>
                        </div>
                    </div>`;
        }else { // 常规样式
            node = `<div class='workshop'>
                        <div class='workshop_name'>${data.name}</div>
                        <div class='workshop_head'></div>
                    </div>`;
        }
        container.insertAdjacentHTML('beforeend', node);
    }, 
```

说明：render 方法会在每个节点渲染时调用，支持原生 dom、React JSX、Vue Slot。当节点需要鼠标悬浮弹窗时，可自行实现。
