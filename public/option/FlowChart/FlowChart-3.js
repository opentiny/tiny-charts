const option = {
    // 节点纵向最小距离
    vGap: 50,
    // 节点横向最小距离
    hGap: 80,
    // 流程图连线形态
    lineStyle: {
      type: 'Round',
    },
    // 禁止节点拖拽
    slient: true,
    render: (container, data) => {
        let idNum = data.id;
        let level = data.level;
        let nodeClass = 'fc-node-example-red';
        if(idNum.indexOf('1') !== -1){
            nodeClass = 'fc-node-example-blue';
        }
        if(idNum.indexOf('2')!== -1){
            nodeClass = 'fc-node-example-orange';
        }
        if(idNum.indexOf('3')!== -1){
            nodeClass = 'fc-node-example-green';
        }
        let node = `<div class="fc-node-example ${nodeClass}">${data.level + 'level'}<div>`;
        container.insertAdjacentHTML('beforeend', node);
    }, 
    // 跨层级场景中，必须给节点配置level层级属性
    data: {
          nodes: [
            {
                id: '1',
                level:2,
            }, {
                id: '2',
                level:3,
            }, {
                id: '3',
                level:3,
            }, {
                id: '4',
                level:4,
            }, {
                id: '5',
                level:5,
            }, {
                id: '16',
                level:6,
            }, {
                id: '7',
                level:5,
            }, {
                id: '9',
                level:1,
            },{
                id: '8',
                level:7,
            },  {
                id: '10',
                level:2,
            }, {
                id: '11',
                level:1,
            }, {
                id: '12',
                level:1,
            }, {
                id: '13',
                level:1,
            }, {
                id: '14',
                level:3,
            },
            {
                id: '15',
                level:1,
            }
        ],
        edges: [
            {
                target: '2',
                source: '1',
                lineStyle: {
                    dash: true,
                },
            }, {
                target: '3',
                source: '9'
                
            },  {
                target: '3',
                source: '10',
            }, {
                target: '10',
                source: '11'
            }, {
                target: '5',
                source: '4'
            }, {
                target: '4',
                source: '3',
                lineStyle: {
                    dash: true,
                },
            }, {
                source: '14',
                target: '4'
            }, {
                source: '4',
                target: '7'
            }, {
                source: '7',
                target: '8'
            }, {
                source: '4',
                target: '8'
            }, {
                source: '5',
                target: '16'
            }, {
                source: '16',
                target: '8'
            }, {
                source: '2',
                target: '4'
            }, {
                source: '12',
                target: '1'
            }, {
                source: '15',
                target: '2'
            },{
                source: '13',
                target: '1'
            }
        ]
    }
}