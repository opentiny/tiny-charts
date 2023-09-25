const option = {
    theme: 'light',
    vGap: 8,//垂直间距
    layout: 'rect',//布局类型
    padding: '0 350px',//容器padding
    render: (container, data) => {
        let status = data.status;
        let node = `<div class="hc-rect-example ${status}"><div>`;
        container.insertAdjacentHTML('beforeend', node);
    },
    tipHtml: (container, data) => {
        let tagHtml;
        const status = data.status;
        const name = data.name;
        if (status === 'success') {
            tagHtml = `<div><span class="hc-label">状态：</span><span class='hc-tag success'>执行成功</span></div>` +
                `<div><span class="hc-label">所属节点：</span><span>${name}</span></div>`;
        } else if (status === 'error') {
            tagHtml = `<div><span class="hc-label">状态：</span><span class='hc-tag success'>执行失败</span></div>` +
                `<div><span class="hc-label">所属节点：</span><span>${name}</span></div>`;
        }
        container.insertAdjacentHTML('beforeend', tagHtml);
    },
    data: [
        {
            name: 'node_1',
            status: 'error',
        },
        {
            name: 'node_2',
            status: 'error',
        },
        {
            name: 'node_3',
            status: 'error',
        },
        {
            name: 'node_4',
            status: 'error',
        },
        {
            name: 'node_5',
            status: 'error',
        },
        {
            name: 'node_6',
            status: 'error',
        },
        {
            name: 'node_7',
            status: 'error',
        },
        {
            name: 'node_8',
            status: 'error',
        },
        {
            name: 'node_9',
            status: 'error',
        },
        {
            name: 'node_10',
            status: 'error',
        },
        {
            name: 'node_11',
            status: 'error',
        },
        {
            name: 'node_12',
            status: 'error',
        },
        {
            name: 'node_13',
            status: 'error',
        },
        {
            name: 'node_14',
            status: 'error',
        },
        {
            name: 'node_15',
            status: 'error',
        },
        {
            name: 'node_16',
            status: 'error',
        },
        {
            name: 'node_17',
            status: 'error',
        },
        {
            name: 'node_18',
            status: 'error',
        },
        {
            name: 'node_19',
            status: 'error',
        },
        {
            name: 'node_20',
            status: 'success',
        },
        {
            name: 'node_21',
            status: 'success',
        },
        {
            name: 'node_22',
            status: 'success',
        },
        {
            name: 'node_23',
            status: 'success',
        },
        {
            name: 'node_24',
            status: 'success',
        },
        {
            name: 'node_25',
            status: 'success',
        },
        {
            name: 'node_26',
            status: 'success',
        },
        {
            name: 'node_27',
            status: 'success',
        },
        {
            name: 'node_28',
            status: 'success',
        },
        {
            name: 'node_29',
            status: 'success',
        },
        {
            name: 'node_30',
            status: 'success',
        },
        {
            name: 'node_31',
            status: 'success',
        },
        {
            name: 'node_32',
            status: 'success',
        },
        {
            name: 'node_33',
            status: 'success',
        },
        {
            name: 'node_34',
            status: 'success',
        },
        {
            name: 'node_35',
            status: 'success',
        },
        {
            name: 'node_36',
            status: 'success',
        },
        {
            name: 'node_37',
            status: 'success',
        },
        {
            name: 'node_38',
            status: 'success',
        },
        {
            name: 'node_39',
            status: 'success',
        },
        {
            name: 'node_40',
            status: 'success',
        },
        {
            name: 'node_41',
            status: 'success',
        },
        {
            name: 'node_42',
            status: 'success',
        },
        {
            name: 'node_43',
            status: 'success',
        },
        {
            name: 'node_44',
            status: 'success',
        },
        {
            name: 'node_45',
            status: 'success',
        },
        {
            name: 'node_46',
            status: 'success',
        },
        {
            name: 'node_47',
            status: 'success',
        },
        {
            name: 'node_48',
            status: 'success',
        },
    ]
};