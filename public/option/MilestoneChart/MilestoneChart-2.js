const option = {
    theme: 'dark',
    // 节点内容是否显示引线
    line: true,
    alignment: 'left',
    layout: 'down', 
    itemStyle:{
        maxWidth: 160,
        iconSize: 16,
        maxHeight: 120,
    },
    assign: 'auto',
    // ‘今天’ 配置
    current: {
        date: 1680481201,
        tip: '今天'
    },
    // 节点回调
    render: (container, data) => {
        let templateStr = `<div class="mc-scales-item-tips-date">${data.tips.year || ''}</div>
            <div class="mc-scales-item-tips-desc">${data.tips.date || ''}</div>
            <div class="mc-scales-item-tips-text">${data.tips.text || ''}</div>`
        container.insertAdjacentHTML('beforeend', templateStr);
    },
    // 鼠标悬浮提示回调
    tooltip: (container, data) => {
        let templateStr = `<div class="mc-scales-item-hover-desc">${data.title || '2023'}${data.desc || '04/1'}</div>
            <div class="mc-scales-item-hover-text">当前状态：${data.text || '22:00'}</div>`
        container.insertAdjacentHTML('beforeend', templateStr);
    },
    // 鼠标点击节点事件
    onClick: (container, data) => {},
    data: [
        {
            id: '0',
            date: 1680274102,
            icon: {
                name: 'success'
            },
            tips: {
                year: '2023年',
                text: '应付关帐',
                date: '3/31 23:02'
            },
        },
        {
            id: '1',
            date: 1680278102,
            line: {
                height: 8
            },
            icon: {
                name: 'success'         
            },
            tips: {
                date: '3/31 24:02',
                text: '资产关账',
            },
        },
        {
            id: '2',
            date: 1680280102,
            line: {
                height: 8
            },
            icon: {
                name: 'done',
            },
            tips: {
                date: '4/1 00:32',
                text: '采购关账',
            },
        },
        {
            id: '3',
            date: 1680343102,
            line: {
                height: 8
            },
            icon: {
                name: 'done'
            },
            tips: {
                date: '4/1 18:02',
                text: '库存关账',
            },
        },
        {
            id: '4',
            date: 1680364102,
            icon: {
                name: 'done'
            },
            tooltip: {                        
                show: true
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/1 24:02',
                text: '应收关账',
            },
        },
        {
            id: '5',
            date: 1680433102,
            line: {
                height: 8
            },
            icon: {
                name: 'done'
            },
            prompt: true,
            tips: {
                date: '4/2 19:02',
            },
        },
        {
            id: '6',
            date: 1680534112,
            line: {
                height: 8
            },
            icon: {
                name: 'doing'
            },
            tips: {
                date: '4/3 23:02',
                text: '',
            },
        },
        {
            id: '7',
            date: 1680537102,
            line: {
                height: 8
            },
            icon: {
                name: 'todo'
            },
            tips: {
                date: '4/3 24:00',
                text: '',
                year: '2024年',
            },
        },
        {
            id: '8',
            date: 1680710122,
            line: {
                height: 8
            },
            icon: {
                name: 'todo'
            },
            tips: {
                text: '',
                date: '4/4 24:02',
            },
        },
        {
            id: '9',
            date: 1680534132,
            line: {
                height: 8
            },
            icon: {
                name: 'todo'
            },
            tips: {
                date: '4/3 23:02',
                text: '总帐关账',
            },
        },
        {
            id: '10',
            date: 1680537142,
            line: {
                height: 8
            },
            icon: {
                name: 'todo'
            },
            tips: {
                year: '2024年',
                date: '4/3 24:00',
                text: '',
            },
        },
        {
            id: '11',
            date: 1680710172,
            line: {
                height: 8
            },
            icon: {
                name: 'todo'
            },
            tips: {
                date: '4/4 24:02',
                text: '',
            },
        },
        {
            id: '12',
            date: 1680720072,
            icon: {
                name: 'todo'
            },
            line: {
                height: 8
            },
            tips: {
                date: '4/6 2:40',
                text: '集团发布报告',
            },
        }
    ]
  };
  