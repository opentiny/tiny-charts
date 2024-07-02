const option = {
  // 节点纵向最小距离
  vGap: 50,
  // 节点横向最小距离
  hGap: 80,
  // 流程图连线形态
  lineStyle: {
    type: 'Round',
    color: '#c1c1c1',
    width: 1
  },
  render: (container, data) => {
    let id = data.id;
    let nodeClass = 'fc-node-example-red';
    if (id.includes('1')) {
      nodeClass = 'fc-node-example-orange';
    }
    if (id.includes('2')) {
      nodeClass = 'fc-node-example-blue';
    }
    if (id.includes('3')) {
      nodeClass = 'fc-node-example-green';
    }
    let node = `<div class="fc-node-example ${nodeClass}">${data.id}</div>`;
    container.insertAdjacentHTML('beforeend', node);
  },
  renderBorder: (container, data) => {
    let node1 = `<div class="rect-item-1"></div>`;
    let node2 = `<div class="rect-item-2"></div>`;
    container.insertAdjacentHTML('beforeend', node1);
    container.insertAdjacentHTML('beforeend', node2);
    let reactNode1 = container.querySelector('.rect-item-1');
    let reactNode2 = container.querySelector('.rect-item-2');
    let startPoint1, endPoint1, startPoint2, endPoint2, endPoint3;
    data.forEach(v => {
      if (v.id === '2') {
        startPoint1 = v
      }
      if (v.id === '1') {
        endPoint1 = v
      }
      if (v.id === '4') {
        startPoint2 = v
      }
      if (v.id === '3') {
        endPoint2 = v
      }
      if (v.id === '5') {
        endPoint3 = v
      }
    })
    const node1Top = `${startPoint1.y - 20}px`;
    const node1left = `${startPoint1.x - 20}px`;
    const node1Width = `${startPoint1.width + 40}px`;
    const node1Height = `${endPoint1.y - startPoint1.y + startPoint1.height + 40}px`;
    reactNode1.setAttribute('style', `position:absolute;top:${node1Top};left:${node1left};width:${node1Width};height:${node1Height};border:1px solid #888888;border-radius:4px`)

    const node2Top = `${startPoint2.y - 20}px`;
    const node2left = `${startPoint2.x - 20}px`;
    const node2Width = `${endPoint3.x - startPoint2.x + endPoint3.width + 40}px`;
    const node2Height = `${endPoint2.y - startPoint2.y + startPoint2.height + 40}px`;
    reactNode2.setAttribute('style', `position:absolute;top:${node2Top};left:${node2left};width:${node2Width};height:${node2Height};border:1px solid #888888;border-radius:4px`)
  },
  // 如果想单独为某条线配置样式，可以在edges中单独配置lineStyle
  data: {
    nodes: [
      {
        id: '1',
      }, {
        id: '2',
      }, {
        id: '3',
      }, {
        id: '4',
      }, {
        id: '5',
      }
    ],
    edges: [
      {
        source: '1',
        target: '3',
        lineStyle: {
          dash: false,
        },
      }, {
        source: '2',
        target: '4'
      }, {
        source: '4',
        target: '5'
      }, {
        source: '3',
        target: '5'
      }
    ]
  }
}