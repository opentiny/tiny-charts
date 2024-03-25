格式：

```d
// container: 节点容器
// data: 节点数据
    tipHtml:(container,data)=>{
        let tagHtml;
        const status = data.status;
        const name = data.name;
        if (status === 'success') {
            tagHtml = `<div class='hc-tag success'>${name}：执行成功</div>`;
        } else if (status === 'error') {
            tagHtml = `<div class='hc-tag failed'>${name}：执行失败</div>`;
        }
        container.insertAdjacentHTML('beforeend', tagHtml);
    },
```

说明：`tipHtml`生成提示框 dom
