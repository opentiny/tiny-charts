const option = {
    // 节点纵向最小距离
    vGap: 60,
    // 节点横向最小距离
    hGap: 200,
    // 流程图连线形态
    lineStyle: {
      type: 'Round',
    },
    // 纵向布局
    direction: 'V',
    // 禁止节点拖拽
    slient: true,
    render: (container, data) => {
        let id = data.id;
        let node = `<div class="flowChart-node">${data.text}<div class="user">审批人：${data.name}</div></div>`;
        if(id == 'start'){
            node = `<div class="flowChart-node start">${data.text}</div>`;
        }
        if(id == 'end'){
            node = `<div class="flowChart-node end">${data.text}</div>`;
        }
        if(id == '5'){
            node = `<div class="flowChart-node now">${data.text}<div class="user">审批人：${data.name}</div><div class="user">当前正处于本阶段</div></div>`;
        }
        container.insertAdjacentHTML('beforeend', node);
    }, 
    // 跨层级场景中，必须给节点配置level层级属性
    data: {
          nodes: [
            {
                id: "start",
                level:1,
                text: '开始'
            }, {
                id: "2",
                level:2,
                text: '提交申请',
                name: '赵一'
            }, {
                id: "3",
                level:3,
                text: '排他网关',
                name: '钱二'
            }, {
                id: "4",
                level:4,
                text: '调出单位申请',
                name: '孙三'
            }, {
                id: "5",
                level:5,
                text: '调入单位接收',
                name: '李四'
            }, {
                id: "6",
                level:6,
                text: '确认报道',
                name: '王五'
            }, {
                id: "end",
                level:7,
                text: '结束'
            }
        ],
        edges: [
            {
                source: "start",
                target: "2",
            }, {
                source: "2",
                target: "3"
            },  {
                source: "3",
                target: "4"
            }, {
                source: "4",
                target: "5"
            }, {
                source: "5",
                target: "6"
            }, {
                source: "6",
                target: "end"
            },{
                source: "3",
                target: "end"
            }
        ]
    }
}