const option = {
  // 节点纵向最小距离
  vGap: 100,
  // 节点横向最小距离
  hGap: 100,
  // 流程图连线形态
  lineStyle: {
    type: 'Round',
    color: '#058358',
    mode: 'trans',
  },
  render: (container, data) => {
      let id = data.id;
      let nodeClass = 'fc-node-example-red';
      if(id.includes('A')){
          nodeClass = 'fc-node-example-blue';
      }
      if(id.includes('B')){
          nodeClass = 'fc-node-example-orange';
      }
      if(id.includes('C')){
          nodeClass = 'fc-node-example-green';
      }
      let node = `<div class="fc-node-example ${nodeClass}">${data.id}<div>`;
      container.insertAdjacentHTML('beforeend', node);
  },
  // 如果想单独为某条线配置样式，可以在edges中单独配置lineStyle
  data: {
        nodes: [
          {
              id: 'A',
          }, {
              id: 'B',
          }, {
              id: 'C',
          }, {
              id: 'D',
          }, {
              id: 'E',
          }
      ],
      edges: [
          {
              source: 'A',
              target: 'B',
          }, {
              source: 'B',
              target: 'C'
          },  {
              source: 'D',
              target: 'E'
          },  {
              source: 'E',
              target: 'C'
          }
      ]
  }
}