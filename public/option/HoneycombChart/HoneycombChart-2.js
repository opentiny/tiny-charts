const option = {
    theme: 'light',
    padding: '0 350px',// 容器padding
    layout: 'ellipse',
    vGap: 2,// 垂直间距
    hGap: 6,
    render: (container, data) => {
        let status = defendXSS(data.status);
        let node = `<div class="hc-circle-example ${status}"><div>`;
        container.insertAdjacentHTML('beforeend', node);
    },
    tipHtml: (container, data) => {
        let tagHtmlTwo;
        const status = data.status;
        const name = defendXSS(data.name);
        if (status === 'success') {
            tagHtmlTwo = `<div class='hc-tag success'>${name}：执行成功</div>`;
        } else if (status === 'error') {
            tagHtmlTwo = `<div class='hc-tag failed'>${name}：执行失败</div>`;
        }
        container.insertAdjacentHTML('beforeend', tagHtmlTwo);
    },
    data: [
        {
            status: 'error',
            name: 'nodes_1',
        },
        {
            name: 'nodes_2',
            status: 'error',
        },
        {
            name: 'nodes_3',
            status: 'error',
        },
        {
            status: 'error',
            name: 'nodes_4',
        },
        {
            name: 'nodes_5',
            status: 'error',
        },
        {
            name: 'nodes_6',
            status: 'error',
        },
        {
            name: 'nodes_7',
            status: 'error',
        },
        {
            status: 'error',
            name: 'nodes_8',
        },
        {
            name: 'nodes_9',
            status: 'error',
        },
        {
            name: 'nodes_10',
            status: 'error',
        },
        {
            name: 'nodes_11',
            status: 'error',
        },
        {
            status: 'error',
            name: 'nodes_12',
        },
        {
            name: 'nodes_13',
            status: 'error',
        },
        {
            name: 'nodes_14',
            status: 'error',
        },
        {
            name: 'nodes_15',
            status: 'error',
        },
        {
            status: 'error',
            name: 'nodes_16',
        },
        {
            name: 'nodes_17',
            status: 'error',
        },
        {
            name: 'nodes_18',
            status: 'error',
        },
        {
            name: 'nodes_19',
            status: 'error',
        },
        {
            status: 'success',
            name: 'nodes_20',
        },
        {
            name: 'node_21',
            status: 'success',
        },
        {
            name: 'nodes_22',
            status: 'success',
        },
        {
            name: 'nodes_23',
            status: 'success',
        },
        {
            status: 'success',
            name: 'nodes_24',
        },
        {
            name: 'nodes_25',
            status: 'success',
        },
        {
            name: 'nodes_26',
            status: 'success',
        },
        {
            name: 'nodes_27',
            status: 'success',
        },
        {
            status: 'success',
            name: 'nodes_28',
        },
        {
            name: 'nodes_29',
            status: 'success',
        },
        {
            name: 'nodes_30',
            status: 'success',
        },
        {
            name: 'nodes_31',
            status: 'success',
        },
        {
            status: 'success',
            name: 'nodes_32',
        },
        {
            name: 'nodes_33',
            status: 'success',
        },
        {
            name: 'nodes_34',
            status: 'success',
        },
        {
            name: 'nodes_35',
            status: 'success',
        },
        {
            status: 'success',
            name: 'nodes_36',
        },
        {
            name: 'nodes_37',
            status: 'success',
        },
        {
            name: 'node_38',
            status: 'success',
        },
        {
            name: 'nodes_39',
            status: 'success',
        },
        {
            status: 'success',
            name: 'nodes_40',
        },
        {
            name: 'nodes_41',
            status: 'success',
        },
        {
            name: 'nodes_42',
            status: 'success',
        },
        {
            name: 'nodes_43',
            status: 'success',
        },
        {
            status: 'success',
            name: 'nodes_44',
        },
        {
            name: 'nodes_45',
            status: 'success',
        },
        {
            name: 'nodes_46',
            status: 'success',
        },
        {
            name: 'nodes_47',
            status: 'success',
        },
        {
            status: 'success',
            name: 'nodes_48',
        },
    ]
};