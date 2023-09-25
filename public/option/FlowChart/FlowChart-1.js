const option = {
    // 节点纵向最小距离
    vGap: 30,
    // 节点横向最小距离
    hGap: 100, 
    // 流程图连线形态
    lineStyle: {
        type: 'Straight'
    },
    /**
    * render: 方法会在每个节点渲染时调用，支持原生dom、React JSX、Vue Slot
    * container: 节点容器
    * data: 节点数据
    **/
    render: (container, data) => {
        let id = data.id;
        let name = data.name;
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
        let node = `<div class="fc-node-example ${nodeClass}">${name}<div>`;
        container.insertAdjacentHTML('beforeend', node);
    },
    // 图表数据
    data: {
        nodes: [
            {
                id: "1",
                name: '营销部'
            }, {
                id: "2",
                name: '客户部'
            }, {
                id: "3",
                name: '策划部'
            }, {
                id: "4",
                name: '销售部'
            }, {
                id: "5",
                name: '研发部'
            }, {
                id: "6",
                name: '生产部'
            }, {
                id: "7",
                name: '技术部'
            }, {
                id: "8",
                name: '产品部'
            }, {
                id: "9",
                name: '品管部'
            }, {
                id: "10",
                name: '仓储部'
            }, {
                id: "11",
                name: '采购部'
            }, {
                id: "12",
                name: '行政部'
            }, {
                id: "13",
                name: '总裁办'
            }, {
                id: "14",
                name: '财经部'
            }, {
                id: "15",
                name: '测试部'
            }
        ],
        edges: [
            {
                source: "1",
                target: "4",
            }, {
                source: "2",
                target: "4"
            }, {
                source: "3",
                target: "4"
            },{
                source: "5",
                target: "7"
            }, {
                source: "6",
                target: "7"
            }, {
                source: "4",
                target: "8"
            }, {
                source: "9",
                target: "8"
            }, {
                source: "7",
                target: "8",
            }, {
                source: "10",
                target: "12"
            }, {
                source: "11",
                target: "12"
            }, {
                source: "8",
                target: "13"
            },{
                source: "14",
                target: "13"
            },{
                source: "12",
                target: "13"
            }, {
                source: "15",
                target: "5"
            }
        ]
    }
};


