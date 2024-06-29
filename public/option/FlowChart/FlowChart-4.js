const option = {
    // 节点纵向最小距离
    vGap: 50,
    // 节点横向最小距离
    hGap: 50,
    // 流程图连线形态
    lineStyle: {
      type: 'Round',
      radius: 8,
    },
    // 禁止节点拖拽
    slient: true,
    render: (container, data) => {
        let id = data.id;
        let node = `<div class="flowChart-node">${data.text}<div class="user">审批人：赵一</div></div>`;
        if(id == 'start'){
            node = `<div class="flowChart-node start">${data.text}</div>`;
        }
        if(id == 'end'){
            node = `<div class="flowChart-node end">${data.text}</div>`;
        }
        container.insertAdjacentHTML('beforeend', node);
    },
    // 跨层级场景中，必须给节点配置level层级属性
    data: {
          nodes: [
            {
                level:1,
                id: 'start',
                text: '开始'
            }, {
                level:2,
                id: '2',
                text: '提交申请'
            }, {
                level:3,
                id: '3',
                text: '排他网关'
            }, {
                level:4,
                id: '4',
                text: '调出单位申请'
            }, {
                level:5,
                id: '5',
                text: '调入单位接收'
            }, {
                level:6,
                id: '6',
                text: '确认报道'
            }, {
                level:7,
                id: 'end',
                text: '结束'
            }
        ],
        edges: [
            {
                target: '2',
                source: 'start'
            }, {
                target: '3',
                source: '2'
            },  {
                target: '4',
                source: '3'
            }, {
                target: '5',
                source: '4'
            }, {
                target: '6',
                source: '5'
            }, {
                target: 'end',
                source: '6'

            },{
                target: 'end',
                source: '3'
            }
        ]
    }
}