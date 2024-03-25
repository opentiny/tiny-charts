const option = {
    theme: 'light',
    padding: '200px 350px',// 容器padding
    hGap: 6,
    vGap: -4,
    render: (container, data) => {
        let status = data.status;
        let node = `<div class="hc-node-example ${status}"><div>`;
        container.insertAdjacentHTML('beforeend', node);
    },
    tipHtml: (container, data) => {
        let tagHtmlOne;
        const status = data.status;
        const name = data.name;
        if (status === 'success') {
            tagHtmlOne = `<div class='hc-tag success'>${name}：执行成功</div>`;
        } else if (status === 'error') {
            tagHtmlOne = `<div class='hc-tag failed'>${name}：执行失败</div>`;
        }
        container.insertAdjacentHTML('beforeend', tagHtmlOne);
    },
    data: [
        {
            name: 'nodea_1',
            status: 'error',
        },
        {
            name: 'nodea_2',
            status: 'error'
        },
        {
            name: 'nodea_3',
            status: 'error'
        },
        {
            name: 'nodea_4',
            status: 'error',
        },
        {
            name: 'nodea_5',
            status: 'error',
        },
        {
            name: 'nodea_6',
            status: 'error',
        },
        {
            name: 'nodea_7',
            status: 'error',
        },
        {
            name: 'nodea_8',
            status: 'error',
        },
        {
            name: 'nodea_9',
            status: 'error',
        },
        {
            name: 'nodea_10',
            status: 'error',
        },
        {
            name: 'nodea_11',
            status: 'error',
        },
        {
            name: 'nodea_12',
            status: 'error',
        },
        {
            name: 'nodea_13',
            status: 'error',
        },
        {
            name: 'nodea_14',
            status: 'error',
        },
        {
            name: 'nodea_15',
            status: 'error',
        },
        {
            name: 'nodea_16',
            status: 'error',
        },
        {
            name: 'nodea_17',
            status: 'error',
        },
        {
            name: 'nodea_18',
            status: 'error',
        },
        {
            name: 'nodea_19',
            status: 'error',
        },
        {
            name: 'nodea_20',
            status: 'success',
        },
        {
            name: 'nodea_21',
            status: 'success',
        },
        {
            name: 'nodea_22',
            status: 'success',
        },
        {
            name: 'nodea_23',
            status: 'success',
        },
        {
            name: 'nodea_24',
            status: 'success',
        },
        {
            name: 'nodea_25',
            status: 'success',
        },
        {
            name: 'nodea_26',
            status: 'success',
        },
        {
            name: 'nodea_27',
            status: 'success',
        },
        {
            name: 'nodea_28',
            status: 'success',
        },
        {
            name: 'nodea_29',
            status: 'success',
        },
        {
            name: 'nodea_30',
            status: 'success',
        },
        {
            name: 'nodea_31',
            status: 'success',
        },
        {
            name: 'nodea_32',
            status: 'success',
        },
        {
            name: 'nodea_33',
            status: 'success',
        },
        {
            name: 'nodea_34',
            status: 'success',
        },
        {
            name: 'nodea_35',
            status: 'success',
        },
        {
            name: 'nodea_36',
            status: 'success',
        },
        {
            name: 'nodea_37',
            status: 'success',
        },
        {
            name: 'nodea_38',
            status: 'success',
        },
        {
            name: 'nodea_39',
            status: 'success',
        },
        {
            name: 'nodea_40',
            status: 'success',
        },
        {
            name: 'nodea_41',
            status: 'success',
        },
        {
            name: 'nodea_42',
            status: 'success',
        },
        {
            name: 'nodea_43',
            status: 'success',
        },
        {
            name: 'nodea_44',
            status: 'success',
        },
        {
            name: 'nodea_45',
            status: 'success',
        },
        {
            name: 'nodea_46',
            status: 'success',
        },
        {
            name: 'nodea_47',
            status: 'success',
        },
        {
            name: 'nodea_48',
            status: 'success',
        },
    ]
};