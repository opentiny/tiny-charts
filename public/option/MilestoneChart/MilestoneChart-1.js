const option = {
    theme: 'dark',
    // 节点内容是否显示引线
    line: true,
    alignment: 'left',
    layout: 'down',
    itemStyle: {
        iconSize: 16,
        maxHeight: 120,
        maxWidth: 160
    },
    assign: 'date',
    // ‘今天’ 配置
    current: {
        tip: '今天',
        date: 1680481201,
    },
    // 节点回调
    render: (container, data) => {
        let templateStr = `<div class="mc-scales-item-tips-date">${defendXSS(data.tips.year) || ''}</div>
            <div class="mc-scales-item-tips-desc">${defendXSS(data.tips.date) || '04/1'}</div>
            <div class="mc-scales-item-tips-text">${defendXSS(data.tips.text) || '21:00'}</div>`
        container.insertAdjacentHTML('beforeend', templateStr);
    },
    // 鼠标悬浮提示回调
    tooltip: (container, data) => {
        let templateStr = `<div class="mc-scales-item-hover-desc">${defendXSS(data.title) || '2023'}${defendXSS(data.desc) || '04/1'}</div>
            <div class="mc-scales-item-hover-text">当前状态：${defendXSS(data.text) || '21:00'}</div>`
        container.insertAdjacentHTML('beforeend', templateStr);
    },
    // 鼠标点击节点事件
    onClick: (container, data) => { },
    data: [
        {
            id: '0',
            date: 1680274101,
            icon: {
                name: 'success',
                size: 26,
            },
            tips: {
                year: '2023年',
                text: '应付关帐',
                date: '3/31 23:01'
            },
        },
        {
            id: '1',
            date: 1680278101,
            icon: {
                name: 'success',
                size: 26
            },
            line: {
                height: 8
            },
            tips: {
                date: '3/31 24:01',
                text: '资产关账',
            },
        },
        {
            id: '2',
            date: 1680280101,
            icon: {
                name: 'done'
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/1 00:31',
                text: '采购关账',
            },
        },
        {
            id: '3',
            date: 1680343101,
            icon: {
                name: 'done'
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/1 18:01',
                text: '库存关账',
            },
        },
        {
            id: '4',
            date: 1680364101,
            icon: {
                name: 'done'
            },
            line: {
                height: 8
            },
            tooltip: {
                show: true
            },
            tips: {
                date: '4/1 24:01',
                text: '应收关账',
            },
        },
        {
            id: '5',
            date: 1680433101,
            icon: {
                name: 'done'
            },
            line: {
                height: 8
            },
            prompt: true,
            tips: {
                date: '4/2 19:01',
            },
        },
        {
            id: '6',
            date: 1680534101,
            icon: {
                name: 'doing'
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/3 23:01',
                text: '总帐关账',
            },
        },
        {
            id: '7',
            date: 1680537101,
            icon: {
                name: 'todo'
            },
            line: {
                height: 8
            },
            tips: {
                year: '2024年',
                date: '4/3 24:01',
                text: '法人发布报告',
            },
        },
        {
            id: '8',
            date: 1680710101,
            icon: {
                name: 'todo'
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/4 24:01',
                text: '集团发布报告',
            },
        }
    ]
};
