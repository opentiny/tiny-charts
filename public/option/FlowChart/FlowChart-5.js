const option = {
    // 节点纵向最小距离
    vGap: 100,
    // 节点横向最小距离
    hGap: 100,
    // 流程图连线形态
    lineStyle: {
      type: 'Round',
      color: '#c2c2c2',
      dash: true,
      width: 1
    },
    render: (container, data) => {
        let id = data.id;
        let nodeClass = 'fc-node-example-red';
        if(id.indexOf('1') !== -1){
            nodeClass = 'fc-node-example-blue';
        }
        if(id.indexOf('2')!== -1){
            nodeClass = 'fc-node-example-orange';
        }
        if(id.indexOf('3')!== -1){
            nodeClass = 'fc-node-example-green';
        }
        let node = `<div class="fc-node-example ${nodeClass}">${data.id}<div>`;
        container.insertAdjacentHTML('beforeend', node);
    }, 
    // 如果想单独为某条线配置样式，可以在edges中单独配置lineStyle
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
            }
        ],
        edges: [
            {
                source: "1",
                target: "2",
                lineStyle: {
                    dash: false,
                },
            }, {
                source: "2",
                target: "3"
            },  {
                source: "4",
                target: "5"
            },  {
                source: "5",
                target: "3"
            }
        ]
    }
}