const option = {
    theme: 'dark',
    // 节点内容是否显示引线
    line: true,
    alignment: 'left',
    layout: 'interlaced',
    itemStyle: {
        maxHeight: 120,
        iconSize: 16,
        maxWidth: 160
    },
    assign: 'auto',
    // ‘今天’ 配置
    current: {
        tip: '今天',
        date: 1680451203,
    },
    // 节点回调
    render: (container, data) => {
        let templateStr = `<div class="mc-scales-item-tips-date">${defendXSS(data.tips.year) || ''}</div>
            <div class="mc-scales-item-tips-desc">${defendXSS(data.tips.date) || '04/1'}</div>
            <div class="mc-scales-item-tips-text">${defendXSS(data.tips.text) || '23:00'}</div>`
        container.insertAdjacentHTML('beforeend', templateStr);
    },
    // 鼠标悬浮提示回调
    tooltip: (container, data) => {
        let templateStr = `<div class="mc-scales-item-hover-desc">${defendXSS(data.title) || '2023'}${defendXSS(data.desc) || '04/1'}</div>
            <div class="mc-scales-item-hover-text">当前状态：${defendXSS(data.text) || '23:00'}</div>`
        container.insertAdjacentHTML('beforeend', templateStr);
    },
    // 鼠标点击节点事件
    onClick: (container, data) => { },
    data: [
        {
            id: '0',
            date: 1680274103,
            icon: {
                name: 'success',
                size: 28
            },
            tips: {
                year: '2023年',
                text: '应付关帐',
                date: '3/31 23:03'
            },
        },
        {
            id: '1',
            date: 1680278103,
            icon: {
                name: 'success',
                size: 28
            },
            line: {
                height: 8
            },
            tips: {
                date: '3/31 24:03',
                text: '资产关账',
            },
        },
        {
            id: '2',
            date: 1680280103,
            icon: {
                name: 'done'
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/1 00:33',
                text: '采购关账',
            },
        },
        {
            id: '3',
            date: 1680343103,
            icon: {
                name: 'done'
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/1 18:03',
                text: '库存关账',
            },
        },
        {
            id: '4',
            date: 1680364103,
            icon: {
                name: 'done'
            },
            line: {
                color: '',
                height: 8,
            },
            tips: {
                date: '4/1 24:03',
                text: '应收关账',
            },
        },
        {
            id: '5',
            date: 1680433103,
            icon: {
                name: 'done'
            },
            line: {
                height: 8
            },
            prompt: true,
            tips: {
                date: '4/2 19:03',
            },
        },
        {
            id: '6',
            date: 1680534103,
            icon: {
                name: 'doing'
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/3 23:03',
                text: '总帐关账',
            },
        },
        {
            id: '7',
            date: 1680537103,
            icon: {
                name: 'todo'
            },
            line: {
                height: 8
            },
            tips: {
                year: '2024年',
                date: '4/3 24:03',
                text: '法人发布报告',
            },
        },
        {
            id: '8',
            date: 1680710103,
            icon: {
                name: 'todo'
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/4 24:03',
                text: '集团发布报告',
            },
        }
    ]
};
