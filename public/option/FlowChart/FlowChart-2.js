const option = {
    // 节点纵向最小距离
    vGap: 50,
    // 节点横向最小距离
    hGap: 80,
    // 流程图连线形态
    lineStyle: {
        type: 'Bezier',
    },
    // 绘制节点的回调，FlowChart会在计算流程图布局前调用
    render: (container, data) => {
        let id = data.id;
        let nodeClass = 'fc-node-example-red';
        if (id.indexOf('1') !== -1) {
            nodeClass = 'fc-node-example-blue';
        }
        if (id.indexOf('2') !== -1) {
            nodeClass = 'fc-node-example-orange';
        }
        if (id.indexOf('3') !== -1) {
            nodeClass = 'fc-node-example-green';
        }
        let node = `<div class="fc-node-example ${nodeClass}">${id}<div>`;
        container.insertAdjacentHTML('beforeend', node);
    },
    // 图表数据
    data: {
        nodes: [
            {
                id: "1",
            }, {
                id: "2",
            }, {
                id: "3",
            }, {
                id: "4",
            }, {
                id: "5",
            }, {
                id: "6",
            }, {
                id: "7",
            }, {
                id: "8",
            }, {
                id: "9",
            }, {
                id: "10",
            }, {
                id: "11",
            }, {
                id: "12",
            }, {
                id: "13",
            }, {
                id: "14",
            }
        ],
        edges: [
            {
                source: "1",
                target: "2",
                lineStyle: {
                    dash: true,
                },
            }, {
                source: "9",
                target: "3"
            }, {
                source: "10",
                target: "3"
            }, {
                source: "11",
                target: "10"
            }, {
                source: "4",
                target: "5"
            }, {
                source: "4",
                target: "6"
            }, {
                source: "3",
                target: "4",
                lineStyle: {
                    dash: true,
                },
            }, {
                source: "14",
                target: "4"
            }, {
                source: "4",
                target: "7"
            }, {
                source: "5",
                target: "8"
            }, {
                source: "6",
                target: "8"
            }, {
                source: "7",
                target: "8"
            }, {
                source: "2",
                target: "4"
            }, {
                source: "12",
                target: "1"
            }, {
                source: "13",
                target: "1"
            }
        ]
    }
};