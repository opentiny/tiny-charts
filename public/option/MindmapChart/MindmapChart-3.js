const option = {
  theme: 'hdesign-light',
  layout: {
    type: 'mindmap',
    direction: 'LR',
    nodeShape: 'circle',
    vGap: 30,
    hGap: 200,
  },
  line: {
    type: 'Direct'
  },

  canvas: {
    grid: {
      size: 20,
      show: true
    }
  },
  connector: {
    startSharing: 'merge',
    endSharing: 'merge',
    type: 'dot',
  },
  render: (container, data) => {
    let id = data.id;
    let nodeClass = 'mmc-node-example-red';
    if (id.indexOf('3') !== -1) {
      nodeClass = 'mmc-node-example-green';
    }
    if (id.indexOf('2') !== -1) {
      nodeClass = 'mmc-node-example-orange';
    }
    if (id.indexOf('1') !== -1) {
      nodeClass = 'mmc-node-example-blue';
    }
    let node = `<div class="mmc-node-example circle ${nodeClass}">${data.text}<div>`;
    container.insertAdjacentHTML('beforeend', node);
  },
  data: {
    id: 'root',
    text: '组织架构',
    children: [
      {
        id: 'R&DDept1',
        text: '研发部',
        children: [
          {
            id: 'frontend1',
            text: '前端开发'
          },
          {
            id: 'backend1',
            text: '后端开发'
          }
        ]
      },
      {
        id: 'designDept2',
        text: '设计部',
        children: [
          {
            id: 'UI1',
            text: '视觉设计师'
          },
          {
            id: 'UX2',
            text: '交互设计师'
          }
        ]
      },
      {
        id: 'productDept3',
        text: '产品部',
        children: [
          {
            id: 'productManager3',
            text: '产品经理'
          },
          {
            id: 'productOperation3',
            text: '产品运营'
          }
        ]
      }
    ]
  }
};